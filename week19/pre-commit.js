#!/usr/bin/env node
let process = require("process");
let exec = require("child_process").exec;
const { ESLint } = require("eslint");

function exec() {
  return new Promise(function (resolve) {
    child_process.exec(name, resolve);
  })
}

(async function main() {
  // 1. Create an instance with the `fix` option.
  const eslint = new ESLint({ fix: true });

  // 2. Lint files. This doesn't modify target files.
  await exec("git stash push -k");
  const results = await eslint.lintFiles(["index.js"]);
  await exec("git stash pop");
  // 3. Modify the files with the fixed code.
  await ESLint.outputFixes(results);

  // 4. Format the results.
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  // 5. Output it.
  console.log(resultText);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
