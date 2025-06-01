import { initializeDilithium } from "./initialize.js";
import { generateKeypair } from "./generateKeypair.js";
import { generateSaveKeypair } from "./generateSaveKeypair.js";
import { signMessage } from "./signMessage.js";
import { verifySignature } from "./verifySignature.js";

const main = async () => {
    try {
        console.log("🚀 Initializing Dilithium WASM module...");
        const api = await initializeDilithium();
        console.log("✅ Dilithium WASM module initialized successfully");

        console.log("🔑 Generating keypair...");

        // Generate keypair: get WASM pointers
        const { pkPtr, skPtr } = generateSaveKeypair(api);
        const { pkPtr1, skPtr2 } = generateSaveKeypair(api);
        
        console.log("✅ Keypair generated successfully");

        const message = "Hello, post-quantum world!";
        console.log(`📝 Signing message: "${message}"`);
        
        // Sign the message with secret key pointer
        const { signature } = signMessage(api, message, skPtr);
        console.log(`✍️ Message signed (signature length: ${signature.length} bytes)`);

        console.log("🔍 Verifying signature...");
        // Verify with public key pointer
        const verified = verifySignature(api, signature, message, pkPtr);
        console.log(verified ? "✅ Signature verified successfully!" : "❌ Verification failed");

        // Test with wrong message to ensure verification works correctly
        console.log("🔍 Testing with wrong message...");
        const wrongVerified = verifySignature(api, signature, "Wrong message", pkPtr);
        console.log(wrongVerified ? "❌ Should have failed but didn't!" : "✅ Correctly rejected wrong message");

        // Clean up memory
        api._free(pkPtr);
        api._free(skPtr);
        
        console.log("🧹 Memory cleaned up");
        
    } catch (error) {
        console.error("❌ Error:", error.message);
    }
};

main();
