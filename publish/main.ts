import {
  parse,
} from "https://deno.land/std@0.117.0/encoding/yaml.ts";

import { resolve } from "https://deno.land/std@0.63.0/path/mod.ts";
import { copy, ensureDir } from "https://deno.land/std@0.95.0/fs/mod.ts";

type Config = {
  noJekyll: boolean
}


const rootPath = resolve(".");
const repoPath = rootPath;
const outputPath = `${rootPath}/output`;

await ensureDir(outputPath); // done in workflow publish.yaml


const config = parse(await Deno.readTextFile(`${repoPath}/config.yaml`)) as Config;

if(config.noJekyll) {
  await Deno.writeTextFile(`${outputPath}/.nojekyll`, "");
}

await Deno.writeTextFile(`${outputPath}/hello.html`, `🎉 This file is generated from Deno + Github Actions/publish.\nDeno version: ${Deno.version.deno}`);

// Public
await copy(`${repoPath}/public`, `${outputPath}`, { overwrite: true });
