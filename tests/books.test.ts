import { test } from "node:test";
import assert from "node:assert/strict";
import { parseBooks } from "../src/utils/books.ts";

test("bookshelf preserves status and associates existing notes without carrying authors across themes", () => {
  const shelf =
    "## Philosophy\n**Plato**\n- [x] _The Republic_\n- [ ] _Other_\n## Literature\n- [ ] _1984_ — _George Orwell_\n- [ ] _Anonymous_";
  const notable =
    "- **The Republic** — _Plato_\n  > A note already written by the author.\n- **1984** — _George Orwell_";
  const books = parseBooks(shelf, notable);
  assert.equal(books.length, 4);
  assert.equal(books[0].author, "Plato");
  assert.equal(books[0].status, "read");
  assert.equal(books[0].note, "A note already written by the author.");
  assert.equal(books[2].author, "George Orwell");
  assert.equal(books[2].status, "planned");
  assert.equal(books[3].author, "");
});
