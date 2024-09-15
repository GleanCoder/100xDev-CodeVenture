const crypto = require("crypto");
function fetchHash(prefix) {
  let input = 0;
  const requestStr = `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10`;
  while (true) {
    let inputStr = requestStr + input.toString();
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
