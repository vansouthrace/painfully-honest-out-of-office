// The Painfully Honest Out-of-Office — make.fun entry (Node 22, standard library only).
// Writes one brutally honest but still polite out-of-office auto-reply to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// The line is a single sentence of at most 200 characters: it admits the
// private truth that answering email faster only earns the sender more email,
// and promises a rested reply on return — honest, warm, and quotable.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  "I'm on leave until Monday, and honestly I booked it the day I realised that replying faster only earns me more email, so I'll answer when I'm back and properly rested.";

// The gate wants 1 to 200 characters of UTF-8 text, a single sentence, and
// nothing but whitespace is no entry at all — refuse to write a line that
// fails its own contract instead of shipping a silent invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; the gate wants 1 to 200`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
