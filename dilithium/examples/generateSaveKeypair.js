import fs from 'fs';
import os from 'os';
import path from 'path';

/**
 * Save a key to a file on the user's Desktop.
 * @param {string} filename - The name of the file.
 * @param {Uint8Array} keyBytes - The key data to save.
 */
const saveKeyToFile = (filename, keyBytes) => {
    const desktopPath = path.join(os.homedir(), 'Desktop');
    const filePath = path.join(desktopPath, filename);
    fs.writeFileSync(filePath, Buffer.from(keyBytes));
    console.log(`💾 Saved ${filename} to Desktop`);
};

/**
 * Generate a Dilithium2 keypair and save them to files.
 * @param {object} api - The initialized WASM API with memory and crypto bindings.
 * @returns {{ pkPtr1: number, skPtr2: number }} - WASM memory pointers to the keys.
 */
export const generateSaveKeypair = (api) => {
    const DILITHIUM2_PUBLICKEYBYTES = 1312;
    const DILITHIUM2_SECRETKEYBYTES = 2560;

    const pkPtr1 = api._malloc(DILITHIUM2_PUBLICKEYBYTES);
    const skPtr2 = api._malloc(DILITHIUM2_SECRETKEYBYTES);

    const result = api.keypair(pkPtr1, skPtr2);
    if (result !== 0) {
        api._free(pkPtr1);
        api._free(skPtr2);
        throw new Error("❌ Keypair generation failed");
    }

    const publicKey = new Uint8Array(api.HEAPU8.buffer, pkPtr, DILITHIUM2_PUBLICKEYBYTES);
    const secretKey = new Uint8Array(api.HEAPU8.buffer, skPtr, DILITHIUM2_SECRETKEYBYTES);

    saveKeyToFile("dilithium-public.key", publicKey);
    saveKeyToFile("dilithium-private.key", secretKey);

    console.log("✅ Keypair generated and saved");

    return { pkPtr1, skPtr2 };
};
