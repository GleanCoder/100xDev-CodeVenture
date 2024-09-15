
# Web3.0 Week-01

## Hashing:
Hashing is a process used in computer science to convert data (like a string or file) into a fixed-size, unique code or "hash value" using a hash function. The goal is to create a unique identifier for the data that is easy to compare and search for, but difficult to reverse back into the original data.

### Key features of hashing:
- Fixed Size: Regardless of input size, the output (hash) is always of a fixed length.
- Fast Lookups: Hashing is commonly used in data structures like hash tables to allow quick data retrieval.
- One-Way Function: Hashes cannot be easily reversed to obtain the original input.
Example: A hash function might take a password and generate a unique hash for secure storage.



**In Web3 and blockchain, hashing plays a crucial role for several reasons:**

- **Data Integrity:** Hashing ensures that any data (like a transaction) is not tampered with. Even a small change in the input data will produce a completely different hash value, making it easy to detect alterations.
- **Efficient Verification:** Hash functions provide a fast and efficient way to verify data, such as transactions or blocks in a blockchain. Nodes can compare the hash of data to ensure it matches without processing the entire content.
- **Cryptographic Security:** Hashing is used in cryptographic algorithms to secure transactions and data. In blockchain, for example, it helps in creating digital signatures and proof-of-work mechanisms.
- **Block Linking:** Each block in a blockchain contains the hash of the previous block, creating a chain of blocks. This ensures that altering any block would break the chain, making the blockchain immutable and secure against tampering.

---

## SHA-256:
SHA-256 **(Secure Hash Algorithm 256-bit)** is a cryptographic hash function that generates a fixed-size 256-bit (32-byte) hash value for any given input. It is widely used in various security protocols and blockchain systems due to its strong security features.

#### Key features of SHA-256:
- Fixed-Length Output: No matter the size of the input, the output hash is always 256 bits (64 hexadecimal characters).
- Deterministic: The same input will always produce the same output hash.
- Irreversible: It’s computationally infeasible to reverse-engineer the original data from the hash.
- Collision-Resistant: Two different inputs are extremely unlikely to produce the same hash value (known as a "collision").
- Widely Used: SHA-256 is employed in blockchain systems (like Bitcoin) for hashing transactions and ensuring data integrity, as well as in SSL/TLS certificates, digital signatures, and more.
In blockchain, SHA-256 is used in the mining process to validate transactions and secure the network. Miners solve cryptographic puzzles using SHA-256 to create new blocks and are rewarded for their efforts.

### SHA-256 Hashing Example:

In this example, we use Node.js's built-in `crypto` module to hash a string (`"GleanCoder"`) using the **SHA-256** algorithm.
#### Code Example:
```javascript
const crypto = require("crypto");
const input = "GleanCoder";
const hash = crypto.createHash("sha256").update(input).digest("hex");
console.log(hash);
```
#### Output:
```console
60b293541a1f7ee3dda838296cf84cec591d402f4e3a809a0184a7975dbd8638
```
![example-img](https://i.ibb.co/MfsFQPr/Screenshot-2024-09-15-171816.png)

- imports the `crypto` module from Node.js, which provides cryptographic functions like hashing, encryption, etc.
- The string *"GleanCoder"* is the data you want to hash.
- **crypto.createHash("sha256"):** Creates a hash object configured to use the SHA-256 algorithm.
- **.update(input):** Adds the input ("GleanCoder") to the hash object. This is the data that will be hashed.
- **.digest("hex"):** Finalizes the hashing process and produces the hash as a hexadecimal string (a common format for representing binary data as a readable string).
  
  In summary, this line takes the input, hashes it using SHA-256,  and returns the result as a hexadecimal string.

-  Once the hash is generated, it logs the hashed value of "GleanCoder" to the console. For example, you would see a hash like 60b293541a1f7ee3dda....

