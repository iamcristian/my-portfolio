import { test } from "node:test";
import assert from "node:assert/strict";
import { matchesDateRange, parseFilterValues } from "../src/utils/list.ts";
import { serializeJsonLd } from "../src/utils/serialize.ts";

test("multiword tags survive serialization without partial matches", () => {
  const tags = parseFilterValues(
    JSON.stringify(["Penetration Testing", "Web"]),
  );
  assert.ok(tags.includes("penetration testing"));
  assert.ok(!tags.includes("testing"));
  assert.deepEqual(parseFilterValues("frontend"), ["frontend"]);
});

test("yesterday excludes today and uses calendar boundaries", () => {
  const now = new Date("2026-10-21T15:30:00Z");
  assert.ok(matchesDateRange("2026-10-20", "yesterday", "", "", now));
  assert.ok(!matchesDateRange("2026-10-21", "yesterday", "", "", now));
  assert.ok(!matchesDateRange("2026-10-19", "yesterday", "", "", now));
  assert.ok(!matchesDateRange("2026-10-22", "week", "", "", now));
});

test("custom dates include the whole end day and reject reversed ranges", () => {
  assert.ok(
    matchesDateRange(
      "2026-10-21T23:59:59.999Z",
      "custom",
      "2026-10-20",
      "2026-10-21",
    ),
  );
  assert.ok(
    !matchesDateRange("2026-10-22", "custom", "2026-10-20", "2026-10-21"),
  );
  assert.ok(
    !matchesDateRange("2026-10-21", "custom", "2026-10-22", "2026-10-20"),
  );
});

test("JSON-LD cannot terminate its script element", () => {
  const value = { title: "</script><script>alert(1)</script>" };
  const encoded = serializeJsonLd(value);
  assert.ok(!encoded.includes("<"));
  assert.deepEqual(JSON.parse(encoded), value);
});

test("isPublished excludes drafts and respects calendar day boundaries", async () => {
  const { isPublished } = await import("../src/utils/blog.ts");
  const now = new Date("2026-10-22T14:00:00Z");

  // Drafts are always excluded
  assert.ok(!isPublished({ draft: true, date: new Date("2026-10-20") }, now));

  // Past dates are published
  assert.ok(isPublished({ draft: false, date: new Date("2026-10-21") }, now));

  // Later today (timezone differences within same day) is published
  assert.ok(
    isPublished({ draft: false, date: new Date("2026-10-22T22:00:00Z") }, now),
  );

  // Future dates (tomorrow or beyond) are withheld
  assert.ok(
    !isPublished({ draft: false, date: new Date("2026-10-24T00:00:00Z") }, now),
  );
});
