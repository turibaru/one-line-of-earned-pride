import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The tailor's apprentice, who'd unpicked the same seam a hundred times, finally stitched it straight, and the master left the shop without checking.";

if (ENTRY.length < 1 || ENTRY.length > 240) {
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
