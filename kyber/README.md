# lattice-wasm - kyber

A WebAssembly + JavaScript wrapper around the **Kyber** post-quantum key encapsulation mechanism (KEM), compiled using Emscripten.

## 📌 Project Goal

To provide a portable WebAssembly interface for Kyber, enabling post-quantum secure encryption (key encapsulation and decapsulation) in JavaScript for Node.js, browsers, and other WASM-compatible platforms.

---

## 🔐 What is Kyber?

**Kyber** is a post-quantum public-key encryption (PKE) and key encapsulation mechanism (KEM) based on lattice cryptography. It is the **NIST-selected** algorithm for post-quantum public key encryption and is designed to be fast, compact, and quantum-secure.

Key benefits:

-   Post-quantum secure encryption
-   Efficient key exchange
-   Compact keys and ciphertexts

Official repo: [pq-crystals/kyber](https://github.com/pq-crystals/kyber)

---

## 📦 Purpose

This project:

-   Wraps the C reference implementation of Kyber using Emscripten
-   Compiles to WebAssembly and JavaScript glue code
-   Exposes core encryption and decryption logic via JS bindings
-   Supports Kyber512, Kyber768, and Kyber1024

---

## ✅ Features

-   WebAssembly bindings for:

    -   Keypair generation (deterministic and random)
    -   Key encapsulation (encryption)
    -   Key decapsulation (decryption)

-   Support for all three Kyber security levels: 512, 768, 1024
-   Emscripten-based build system
-   Works in Node.js and browser environments

---

## 📁 Folder Structure

```
lattice-wasm/kyber
├── examples/             # JS examples
│   ├── generateKeypair.js
│   ├── encrypt.js
│   ├── decrypt.js
│   ├── initialize.js
│   └── README.md
│
├── src/                  # WASM + wrapper
│   ├── kyber_wrapper.c   # C wrapper for Kyber
│   ├── kyber.js          # JS glue (compiled)
│   └── kyber.wasm        # WebAssembly binary
│
└── README.md             # This file
```

---

## 🔧 Setup Instructions

### Step 1: Install Emscripten SDK

```bash
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

### Step 2: Clone Kyber Reference Implementation

```bash
git clone https://github.com/pq-crystals/kyber.git
```

### Step 3: Compile using Emscripten

```bash
# Run this from the Desktop directory
emcc \
...
```

---

## 🚀 Use Cases

Post-quantum encryption like Kyber is ideal for:

-   ✅ **Secure key exchange**
-   ✅ **Encrypted backups**
-   ✅ **End-to-end messaging**
-   ✅ **Quantum-secure VPN and TLS**
-   ✅ **Email and chat encryption**
-   ✅ **IoT device communication**

---

## ❄️ Why Kyber?

With quantum computers on the horizon, classical encryption like RSA and ECC may become obsolete. Kyber is NIST's chosen KEM for replacing RSA-based key exchange with a quantum-safe alternative.

---

## 📄 Example Flow

1. Generate keypair using Kyber512
2. Alice uses Bob's public key to encapsulate (encrypt) a shared key
3. Bob uses his private key to decapsulate and retrieve the shared key
4. Use that shared key for symmetric AES/GCM encryption of messages

---

## 📅 Future Plans

-   Generalize wrapper for all Kyber variants (768/1024)
-   TypeScript bindings for easy frontend use
-   `@lattice/encrypt` package using this WASM module under the hood
-   Integration with `lattice-crypto-js` ecosystem

---

## 🛡️ Security Notes

This is a **reference-level** wrapper. For production use:

-   Review for constant-time guarantees
-   Use optimized or hardened implementations
-   Follow cryptographic best practices for key storage and session key use

---

## 📅 Requirements

-   Emscripten SDK
-   Node.js or browser

---

## 📁 License

Based on pq-crystals-kyber, released in the public domain or under permissive license.

Built with ❤️ for post-quantum encrypted future.
