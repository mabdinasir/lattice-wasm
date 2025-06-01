export const verifySignature = (api, signature, message, pkPtr) => {
    let sigPtr = null;
    let msgPtr = null;
    
    try {
        // Allocate memory for signature
        sigPtr = api._malloc(signature.length);
        if (!sigPtr) throw new Error("Failed to allocate memory for signature");
        
        // Copy signature data
        const sigView = new Uint8Array(api.HEAPU8.buffer, sigPtr, signature.length);
        sigView.set(signature);

        // Allocate memory for message
        const msgBytes = new TextEncoder().encode(message);
        msgPtr = api._malloc(msgBytes.length);
        if (!msgPtr) throw new Error("Failed to allocate memory for message");
        
        // Copy message data
        const msgView = new Uint8Array(api.HEAPU8.buffer, msgPtr, msgBytes.length);
        msgView.set(msgBytes);

        // Debug logging
        console.log(`Verify params: sigPtr=${sigPtr}, sigLen=${signature.length}, msgPtr=${msgPtr}, msgLen=${msgBytes.length}, pkPtr=${pkPtr}`);

        // Call verification function
        const result = api.verify(sigPtr, signature.length, msgPtr, msgBytes.length, pkPtr);
        
        console.log(`Verification result: ${result}`);
        
        // For Dilithium: 0 = success, non-zero = failure
        return result === 0;
        
    } catch (error) {
        console.error('Error in verifySignature:', error);
        return false;
    } finally {
        // Clean up memory
        if (sigPtr) api._free(sigPtr);
        if (msgPtr) api._free(msgPtr);
    }
};
