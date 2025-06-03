# lattice-wasm - dilithium

A WebAssembly + JavaScript wrapper around the Dilithium post-quantum digital signature scheme, compiled using Emscripten.

## 📌 Project Goal

To provide a simple, portable JavaScript/WebAssembly interface for the Dilithium post-quantum digital signature scheme. This enables usage of quantum-resistant signatures in browsers, Node.js, or any WASM-compatible platform.

---

## 🔐 What is Dilithium?

**Dilithium** is a post-quantum digital signature scheme based on lattice cryptography. It is one of the algorithms standardized by NIST as part of their Post-Quantum Cryptography project. Dilithium is designed to remain secure even against attacks by future quantum computers.

Key benefits:

-   Quantum-resistant
-   Fast signature verification
-   Compact public keys and signatures

Official repo: [pq-crystals/dilithium](https://github.com/pq-crystals/dilithium)

---

## 📦 Purpose

This project:

-   Wraps the C reference implementation of Dilithium using Emscripten
-   Compiles the logic to WebAssembly (`.wasm`) and JavaScript glue code (`.js`)
-   Exposes a minimal set of key functions for signing and verification from JS

---

## ✅ Features

-   WebAssembly bindings for:

    -   Keypair generation
    -   Message signing
    -   Signature verification

-   Emscripten-based build pipeline
-   Can be used in:

    -   Node.js apps
    -   Web apps
    -   Browser extensions

---

## 📁 Folder Structure

```
lattice-wasm/dilithium
├── examples/             # Example JavaScript usage files
│   ├── generateKeypair.js
│   ├── signMessage.js
│   ├── verifySignature.js
│   ├── initialize.js
│   ├── runAll.js
│   └── README.md
│
├── src/                  # Source files (WASM bindings + wrapper)
│   ├── wrapper.c
│   ├── dilithium.js
│   └── dilithium.wasm
│
└── README.md             # Main README
```

## 🔧 Setup Instructions

### Step 1: Install Emscripten SDK (emsdk)

**On Mac/Linux**:

```bash
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

### Step 2: Verify installation

```bash
emcc --version
```

Make sure `emcc` is available in your shell environment.

---

## 🧱 Project Build Steps

### 1. Clone the Dilithium reference implementation

```bash
git clone https://github.com/pq-crystals/dilithium.git
```

### 2. Create your wrapper project

```bash
mkdir lattice-wasm
cd lattice-wasm
mkdir src examples
```

### 3. Place `wrapper.c` in `src/` and the compiled `dilithium.js` / `dilithium.wasm` files there too (More below).

### 4. Compile with Emscripten

```bash
cd Desktop(or wherever you cloned the dilithium repo - both dilithium and lattice-wasm should be in the same directory)

emcc lattice-wasm/dilithium/src/wrapper.c \
    dilithium/ref/fips202.c \
    dilithium/ref/ntt.c \
    dilithium/ref/poly.c \
    dilithium/ref/polyvec.c \
    dilithium/ref/randombytes.c \
    dilithium/ref/reduce.c \
    dilithium/ref/rounding.c \
    dilithium/ref/sign.c \
    dilithium/ref/packing.c \
    dilithium/ref/symmetric-shake.c \
    -I dilithium/ref \
    -o lattice-wasm/src/dilithium.js \
    -s WASM=1 \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=1 \
    -s EXPORTED_FUNCTIONS='["_crypto_sign_keypair_wrapper", "_crypto_sign_wrapper", "_crypto_verify_wrapper", "_malloc", "_free"]' \
    -s EXPORTED_RUNTIME_METHODS='["cwrap", "HEAPU8", "HEAPU32", "ccall"]' \
    -O3
```

### 5. Output

-   `src/dilithium.js` – JavaScript glue to load the WASM module
-   `src/dilithium.wasm` – WebAssembly binary

## 🚀 Use Cases

Post-quantum digital signatures like Dilithium are useful in:

-   ✅ **JWT signing** (quantum-safe alternative to RSA/ECDSA)
-   ✅ **Document signing** and verification (contracts, PDFs)
-   ✅ **Code signing** (releases, executables)
-   ✅ **Email signing** (PGP alternatives)
-   ✅ **Authentication tokens** (challenge-response)
-   ✅ **Blockchain/smart contracts** with quantum-resistant signatures

---

## 🔒 Why Post-Quantum Signatures?

Classical cryptography like RSA and ECC may be broken by quantum computers. Dilithium is a NIST-approved post-quantum algorithm resistant to quantum attacks.

## 📋 Requirements

-   **Emscripten SDK** (for compilation)
-   **Node.js** (for running examples)
-   **Modern browser** (optional, for WASM in web apps)

## 🛠️ Development Tips

### Building for Different Environments

-   Node.js:

```bash
emcc ... -s ENVIRONMENT='node'
```

-   Web:

```bash
emcc ... -s ENVIRONMENT='web'
```

-   Universal:

```bash
emcc ... -s ENVIRONMENT='web,node'
```

## 📁 License

Based on PQ-Crystals-Dilithium, released under a public domain or permissive license.

## 🔐 Security Note

> ⚠️ This is a reference-level project. For production use, ensure proper security review and optimized cryptographic implementations.

Built with ❤️ for cryptography enthusiasts and post-quantum readiness.
