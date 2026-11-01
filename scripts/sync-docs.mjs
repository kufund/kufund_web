import { cp, rm } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const docs = new URL("../docs/", import.meta.url);

await rm(docs, { recursive: true, force: true });
await cp(dist, docs, { recursive: true });
console.log("Synced dist/ to docs/");
