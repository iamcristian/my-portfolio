import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const localesDir = path.resolve("src/i18n/locales");
const locales = ["es", "de", "ru", "ja"] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function getExports(filePath: string): Promise<Record<string, unknown>> {
  const fileUrl = pathToFileURL(filePath).href;
  return (await import(fileUrl)) as Record<string, unknown>;
}

function checkKeys(enVal: unknown, locVal: unknown, pathStr: string): string[] {
  const errors: string[] = [];
  if (enVal === null || enVal === undefined) return [];
  if (locVal === null || locVal === undefined) {
    errors.push(`Missing key/path: ${pathStr}`);
    return errors;
  }
  if (typeof enVal !== typeof locVal) {
    errors.push(
      `Type mismatch at ${pathStr}: expected ${typeof enVal}, got ${typeof locVal}`,
    );
    return errors;
  }
  if (typeof enVal === "string" && typeof locVal === "string") {
    if (enVal.trim().length > 0 && locVal.trim().length === 0) {
      errors.push(`Empty translation string at ${pathStr}`);
    }
    const enPlaceholders = Array.from(
      enVal.matchAll(/\{[a-zA-Z0-9_]+\}/g),
      (m) => m[0],
    ).sort();
    const locPlaceholders = Array.from(
      locVal.matchAll(/\{[a-zA-Z0-9_]+\}/g),
      (m) => m[0],
    ).sort();
    if (enPlaceholders.join(",") !== locPlaceholders.join(",")) {
      errors.push(
        `Placeholder mismatch at ${pathStr}: expected [${enPlaceholders.join(", ")}], got [${locPlaceholders.join(", ")}]`,
      );
    }
    return errors;
  }
  if (Array.isArray(enVal)) {
    if (!Array.isArray(locVal)) {
      errors.push(`Expected array at ${pathStr}`);
      return errors;
    }
    if (enVal.length !== locVal.length) {
      errors.push(
        `Array length mismatch at ${pathStr}: expected ${enVal.length}, got ${locVal.length}`,
      );
    }
    for (let i = 0; i < Math.min(enVal.length, locVal.length); i++) {
      errors.push(...checkKeys(enVal[i], locVal[i], `${pathStr}[${i}]`));
    }
  } else if (isRecord(enVal) && isRecord(locVal)) {
    for (const key of Object.keys(enVal)) {
      if (!(key in locVal)) {
        errors.push(`Missing key: ${pathStr}.${key}`);
      } else {
        errors.push(...checkKeys(enVal[key], locVal[key], `${pathStr}.${key}`));
      }
    }
    for (const key of Object.keys(locVal)) {
      if (!(key in enVal)) {
        errors.push(`Extra key not in English source: ${pathStr}.${key}`);
      }
    }
  }
  return errors;
}

async function run() {
  console.log("Checking i18n key alignment...");
  let exitCode = 0;
  const enDir = path.join(localesDir, "en");

  if (!fs.existsSync(enDir)) {
    console.error("English locales directory not found");
    process.exit(1);
  }

  const files = fs.readdirSync(enDir).filter((f) => f.endsWith(".ts"));

  for (const locale of locales) {
    console.log(`\nChecking locale: [${locale}]`);
    let localeErrors = 0;

    for (const file of files) {
      const enFilePath = path.join(enDir, file);
      const locFilePath = path.join(localesDir, locale, file);

      if (!fs.existsSync(locFilePath)) {
        console.error(`  [ERROR] File missing: locales/${locale}/${file}`);
        localeErrors++;
        continue;
      }

      try {
        const enMod = await getExports(enFilePath);
        const locMod = await getExports(locFilePath);

        // Compare every export in the English file
        for (const exportName of Object.keys(enMod)) {
          if (!(exportName in locMod)) {
            console.error(
              `  [ERROR] Missing export "${exportName}" in locales/${locale}/${file}`,
            );
            localeErrors++;
            continue;
          }

          const fileErrors = checkKeys(
            enMod[exportName],
            locMod[exportName],
            `${file} -> export ${exportName}`,
          );
          if (fileErrors.length > 0) {
            for (const err of fileErrors) {
              console.error(`  [ERROR] ${err}`);
              localeErrors++;
            }
          }
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(
          `  [ERROR] Failed to compare ${file} for locale ${locale}:`,
          message,
        );
        localeErrors++;
      }
    }

    if (localeErrors > 0) {
      console.log(`❌ Locale [${locale}] has ${localeErrors} errors.`);
      exitCode = 1;
    } else {
      console.log(`✅ Locale [${locale}] is fully aligned.`);
    }
  }

  if (exitCode === 0) {
    console.log(
      "\n✨ All locales are fully aligned with the English source of truth!",
    );
  } else {
    console.log("\n❌ Key validation failed with errors.");
  }

  process.exit(exitCode);
}

run().catch((err: unknown) => {
  console.error("Validation runner crashed:", err);
  process.exit(1);
});
