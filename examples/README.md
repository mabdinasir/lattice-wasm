# 🧪 Dilithium WASM Examples

This directory contains minimal, modular JavaScript examples demonstrating how to use the Dilithium WebAssembly module compiled with Emscripten.

It covers:

-   🔐 Keypair generation
-   ✍️ Message signing
-   ✅ Signature verification

All examples use modern ES module syntax (`import`) and are organized for clarity and modular testing.

---

## 📁 Folder Structure

```
lattice-wasm/
├── examples/             # Example JavaScript usage files
│   ├── generateKeypair.js
│   ├── signMessage.js
│   ├── verifySignature.js
│   ├── initialize.js
│   ├── runAll.js
│   └── README.md - # You're here!
│
├── src/                  # Source files (WASM bindings + wrapper)
│   ├── wrapper.c
│   ├── dilithium.js
│   └── dilithium.wasm
│
└── README.md             # Main README
```

---

## 🔧 Prerequisites

-   Node.js v16+
-   Emscripten-built `dilithium.js` and `dilithium.wasm` in `src/`

---

## 🚀 Setup

1. Ensure the compiled Dilithium files (`dilithium.js` and `dilithium.wasm`) are in the `src/` directory.

2. Set the `type` to `module` in your `package.json` (at the project root) if you initialize npm or bun:

```json
{
    "type": "module"
}
```

3. Run any script from the project root like so:

```bash
node examples/runAll.js
```

---

## 📜 How to Run Each Example

### 🔐 Generate Keypair

```bash
node examples/generateKeypair.js
```

### ✍️ Sign a Message

Make sure to modify or use existing keys inside the script as needed:

```bash
node examples/signMessage.js
```

### 🔍 Verify Signature

Use matching keys/message/signature from signing:

```bash
node examples/verifySignature.js
```

### 🚀 Full Demo

To run keygen → sign → verify in one flow:

```bash
node examples/runAll.js
```

---

## 📦 Notes

-   All memory is allocated/freed manually via `_malloc` / `_free`.
-   Default configuration uses Dilithium2 (NIST standard).
-   `TextEncoder` and `Uint8Array` are used for message handling.
-   Each file is modular and can be imported elsewhere as needed.

---

Built with ❤️ for post-quantum cryptography experimentation.
