export const generateKeypair = (api) => {
    const DILITHIUM2_PUBLICKEYBYTES = 1312;
    const DILITHIUM2_SECRETKEYBYTES = 2560;
    
    const pkPtr = api._malloc(DILITHIUM2_PUBLICKEYBYTES);
    const skPtr = api._malloc(DILITHIUM2_SECRETKEYBYTES);

    const result = api.keypair(pkPtr, skPtr);
    if (result !== 0) {
        api._free(pkPtr);
        api._free(skPtr);
        throw new Error("Keypair generation failed");
    }

    return { pkPtr, skPtr };
};