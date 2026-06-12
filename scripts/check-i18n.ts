import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const localesDir = path.resolve("src/i18n/locales");
const locales = ["es", "de", "ru", "ja"];

async function getExports(filePath: string) {
  const fileUrl = pathToFileURL(filePath).href;
  return await import(fileUrl);
}

function checkKeys(enVal: any, locVal: any, pathStr: string): string[] {
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
  } else if (typeof enVal === "object") {
    for (const key of Object.keys(enVal)) {
      if (!(key in locVal)) {
        errors.push(`Missing key: ${pathStr}.${key}`);
      } else {
        errors.push(...checkKeys(enVal[key], locVal[key], `${pathStr}.${key}`));
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
      } catch (err: any) {
        console.error(
          `  [ERROR] Failed to compare ${file} for locale ${locale}:`,
          err.message,
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

run().catch((err) => {
  console.error("Validation runner crashed:", err);
  process.exit(1);
});
