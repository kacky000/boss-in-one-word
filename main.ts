import { mkdirSync, writeFileSync } from "node:fs";

// One word for the boss.
const word = "Hovercraft";

const chars = [...word].length;
if (chars < 1 || chars > 30 || /\s/.test(word)) throw new Error(`"${word}" must be one word of at most 30 characters`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, word);
