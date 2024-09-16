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
- The string _"GleanCoder"_ is the data you want to hash.
- **crypto.createHash("sha256"):** Creates a hash object configured to use the SHA-256 algorithm.
- **.update(input):** Adds the input ("GleanCoder") to the hash object. This is the data that will be hashed.
- **.digest("hex"):** Finalizes the hashing process and produces the hash as a hexadecimal string (a common format for representing binary data as a readable string).

  In summary, this line takes the input, hashes it using SHA-256, and returns the result as a hexadecimal string.

- Once the hash is generated, it logs the hashed value of "GleanCoder" to the console. For example, you would see a hash like 60b293541a1f7ee3dda....

---

#### **NOTE:**

The `crypto.createHash('sha256').update()` method requires its input to be a string, buffer, or binary data. Since numbers aren't directly compatible, you must convert any numerical input to a string using `.toString()` before hashing. This ensures the method processes the data correctly and avoids errors.

---

**In the context of hashing, particularly in blockchain or cryptographic applications, nonce and prefix are key concepts:**

![IMAGE](https://i.ibb.co/M6TQzVt/Screenshot-2024-09-16-093851.png)

#### 1. Prefix:

- A prefix in hashing refers to the beginning characters of a hash that need to meet specific criteria.
- For example, in Proof of Work, miners aim to find a hash that starts with a certain number of leading zeros (e.g., "00000"). This is the prefix that determines whether a hash is valid or not.
- The difficulty of the mining process is determined by how long or specific this prefix is.

#### 2. Nonce (Number Only Used Once):

- A nonce is a random or incremental value added to input data to modify the hash output.
- In blockchain (e.g., Bitcoin mining), a nonce is continuously adjusted until a hash with certain desired properties is found (like a hash starting with a specific number of zeros).
- It’s often used in Proof of Work algorithms to create a valid block. The goal is to find a nonce that, when combined with other block data, results in a hash that meets certain criteria.

#### Code Example:

```javascript
const crypto = require("crypto");
function findHash(prefix) {
  let input = 0;
  while (true) {
    let inputStr = "GleanCoder" + input.toString();
    const hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}
const result = findHash("00000");
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
```

#### Output:

```console
Input: GleanCoder1536286
Hash: 00000d761302348afddda4f94bf10354e4f57f3b206a9639ce3ef5f3730f6dff
```

#### Example in Blockchain:

- Nonce: A miner changes the nonce repeatedly to find a hash with the required prefix.
- Prefix: If the blockchain requires a hash that starts with '00000', the miner adjusts the nonce until they find a hash with this prefix.
  <br>

---

<br>

Mining in the context of blockchain, particularly in Proof of Work (PoW) systems like Bitcoin, is the process by which transactions are verified and added to the blockchain. It involves solving complex mathematical puzzles, which requires significant computational power.

**Mining is essential in blockchain networks, particularly in Proof of Work (PoW) systems like Bitcoin, for several reasons:**

**_1. Security and Fraud Prevention:_**

- Mining helps secure the blockchain by making it extremely difficult for anyone to manipulate or alter transaction records. In order to change a block in the chain, an attacker would have to re-mine that block and all subsequent blocks, which requires an enormous amount of computational power.
- This makes it highly unlikely that any single entity can control the network or commit fraudulent activities, like double-spending (spending the same cryptocurrency twice).

**_2. Achieving Decentralized Consensus:_**

- In a decentralized system, there is no central authority to verify and validate transactions. Mining serves as the consensus mechanism that allows all nodes (computers) on the network to agree on which transactions are valid.
- Miners compete to solve a complex cryptographic puzzle, and the first one to solve it earns the right to add the next block of transactions to the blockchain. This process ensures that only valid transactions are added.

**_3. Coin Supply Regulation:_**

- Mining controls the issuance of new cryptocurrency units (e.g., Bitcoin). For instance, each time a miner successfully mines a new block, they are rewarded with newly created bitcoins (the block reward).
- This mechanism regulates the supply of new coins entering circulation, maintaining a stable rate of new coin issuance over time.

**_4. Preventing Network Spam:_**

- Mining adds a cost to adding new blocks to the blockchain by requiring computational work, which prevents malicious actors from spamming the network with fraudulent transactions or blocks.
- The required work (solving the cryptographic puzzle) creates an economic disincentive for malicious behavior.

**_5. Maintain Decentralization:_**

- Without mining, a central authority would be needed to validate and verify transactions. Mining allows a decentralized network of participants (miners) to do this work without any central control, making the system more democratic and trustless.
In short, mining is necessary to secure the blockchain, maintain decentralized consensus, regulate the creation of new coins, and prevent fraud and spam in the network. Without mining, the blockchain would be vulnerable to attacks and manipulation.
<br>
<br>
  <p align="center">
  <img src="https://i.ibb.co/pZ2XqSP/trgraph-drawio.png" alt="Transaction Flow Graph" >
</p>

---

---

<br>
<br>

### For More

- [Blockchain Demo](https://andersbrownworth.com/blockchain/)
- [How Does Blockchain Work?](https://intellipaat.com/blog/tutorial/blockchain-tutorial/how-does-blockchain-work/)
- [Blockchain.md](./BLOCKCHAIN.md)
- [Bitcoin: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)
