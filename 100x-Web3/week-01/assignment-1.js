/*
Assignment #1
What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
*/
const crypto = require("crypto");

function hashStartWithPrefix(prefix) {
  let input = 0;
  while (true) {
    let inputStr = input.toString();
    const hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}
const result = hashStartWithPrefix("00000");
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

/*
### Why Convert to String?

1. The crypto.update() Method Requires a String or Buffer:
    
    The crypto.createHash('sha256').update() method expects its input to be either a string, buffer, or some other binary data. Since `input` is initially a number, you need to convert it to a string using `.toString()` so that it can be hashed properly.
    
2. Hashing Behavior with Different Data Types:
    
    If you don’t convert `input` to a string and pass a number directly, the `crypto` module won't hash the number correctly. It could interpret it differently (as binary data, or in a different format). By converting the number to a string, you're ensuring consistent behavior and that you’re hashing the actual string representation of the number.
    
3. Consistency for Incrementing Values:
    
    Since you are incrementing `input` (from 0 upwards), converting each value to a string ensures that you can effectively hash increasing values like `"0"`, `"1"`, `"2"`, etc. Without this, the hashing algorithm wouldn’t work as expected for the sequence of inputs.
    

Example:

If `input = 123`, calling `input.toString()` will convert it to the string `"123"`. This is necessary because the `crypto.update()` method needs to process it as a string for the SHA-256 hashing algorithm to function correctly.

Thus, this line ensures that the input is correctly formatted as a string before it gets hashed.


*/
