// Weirdest Job Title: Blind Judge Showdown
// Entry program: writes a single job title (<= 60 characters) to /output/entry.txt.
//
// The title: "Professional Mourner for Strangers' Goldfish" (44 characters).
// Why it wins the blind judge:
//   - Real job, gloriously odd twist: professional mourners are a real
//     occupation, but this one is hired to grieve goldfish belonging to
//     complete strangers - fish they never met, for people they never met.
//   - Specific enough to picture instantly: a person in black, weeping
//     over a tiny fishbowl, on the clock.
//   - The twist lands on the first read: "Strangers'" is the word that
//     makes it weirder than any ordinary pet-mourning job.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Professional Mourner for Strangers' Goldfish";

// The gate requires 1-60 UTF-8 characters, not only whitespace.
// The leaderboard's Size column also counts bytes, so guard both.
const charCount = [...TITLE].length;
const byteCount = Buffer.byteLength(TITLE, "utf8");
if (charCount < 1 || charCount > 60 || !TITLE.trim()) {
  throw new Error(`entry title must be 1-60 characters, got ${charCount}`);
}
if (byteCount > 60) {
  throw new Error(`entry title must fit in 60 bytes, got ${byteCount}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
console.log(`Wrote entry (${charCount} chars, ${byteCount} bytes): ${TITLE}`);
