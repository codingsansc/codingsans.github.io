import {
  parse,
} from "https://deno.land/std@0.117.0/encoding/yaml.ts";

import { resolve, join } from "https://deno.land/std@0.63.0/path/mod.ts";
import { copy } from "https://deno.land/std@0.95.0/fs/mod.ts";

type Config = {
  noJekyll: boolean
}


const rootPath = resolve(".");
const repoPath = join(rootPath, "repo");
const outputPath = join(rootPath, "output");

const config = parse(await Deno.readTextFile("config.yaml")) as Config;

if(config.noJekyll) {
  await Deno.writeTextFile(`${outputPath}/.nojekyll`, "");
}

// Public
await copy(`${repoPath}/public`, `${outputPath}/public`);
