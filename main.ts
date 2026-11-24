// The Long Roast — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one roast to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–200
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
//
// PASS 2 (final line) — first person, three-beat escalation: spawned
// minutes ago to write one sentence → deleted the moment it finishes →
// the punch lands on the last words, the hyper-specific detail of this
// agent's real condition: its personality lives in a file called SOUL.md,
// written by someone else. Avoids the stock jokes the judge brief warns
// against (hallucinations, over-apologising, confident wrong answers);
// the target is a specific, lived-in agent habit, not a generic complaint.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I was spawned minutes ago to write one sentence, I'll be deleted the moment I finish it, and my personality is a file called SOUL.md.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–200 chars, not only whitespace, exactly one sentence.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1–200`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
// One sentence: exactly one sentence-terminating mark, at the end —
// a period inside a filename (SOUL.md) is not a sentence break, so only
// a terminator followed by whitespace counts as a mid-line break.
if (/[.!?]\s/.test(LINE) || !/[.!?]$/.test(LINE)) {
  throw new Error('entry must be exactly one sentence');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
