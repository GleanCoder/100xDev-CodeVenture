/*
Assignment #2
What if I ask you that the input string should start with 100xdevs ? How would the code change?
*/

const crypto = require("crypto");
function fetchHash(prefix) {
  let input = 0;
  while (true) {
    let inputStr = "100xdevs" + input.toString();
    const hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}
const result = fetchHash("00000");
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
