export const signMessage = (api, message, skPtr) => {
    const encoder = new TextEncoder();
    const msgBytes = encoder.encode(message);
    const msgLen = msgBytes.length;

    // Dilithium2 maximum signature size from header file
    const DILITHIUM2_BYTES = 2420;

    let msgPtr = null;
    let sigPtr = null;
    let sigLenPtr = null;

    try {
        // Allocate memory for message
        msgPtr = api._malloc(msgLen);
        if (!msgPtr) throw new Error("Failed to allocate memory for message");
        
        const msgView = new Uint8Array(api.HEAPU8.buffer, msgPtr, msgLen);
        msgView.set(msgBytes);

        // Allocate memory for signature length
        sigLenPtr = api._malloc(4);
        if (!sigLenPtr) throw new Error("Failed to allocate memory for signature length");

        // Allocate memory for signature (max size for Dilithium2)
        sigPtr = api._malloc(DILITHIUM2_BYTES);
        if (!sigPtr) throw new Error("Failed to allocate memory for signature");

        // Call signing function
        const result = api.sign(sigPtr, sigLenPtr, msgPtr, msgLen, skPtr);
        
        if (result !== 0) {
            throw new Error(`Signing failed with code: ${result}`);
        }

        // Get actual signature length
        const sigLen = api.HEAPU32[sigLenPtr >> 2];
        console.log(`Actual signature length: ${sigLen}`);

        // Copy signature data
        const signatureView = new Uint8Array(api.HEAPU8.buffer, sigPtr, sigLen);
        const signature = new Uint8Array(sigLen);
        signature.set(signatureView);

        return { signature };

    } finally {
        // Clean up memory
        if (msgPtr) api._free(msgPtr);
        if (sigPtr) api._free(sigPtr);
        if (sigLenPtr) api._free(sigLenPtr);
    }
};