const crypto = require("crypto");
const input = "GleanCoder";
const hash = crypto.createHash("sha256").update(input).digest("hex");
console.log(hash);
