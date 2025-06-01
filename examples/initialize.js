import createDilithiumModule from '../src/dilithium.js';

export const initializeDilithium = async () => {
    const Module = await createDilithiumModule();

    return {
        Module,
        keypair: Module.cwrap("crypto_sign_keypair_wrapper", "number", ["number", "number"]),
        sign: Module.cwrap("crypto_sign_wrapper", "number", ["number", "number", "number", "number", "number"]),
        verify: Module.cwrap("crypto_verify_wrapper", "number", ["number", "number", "number", "number", "number"]),
        _malloc: Module._malloc,
        _free: Module._free,
        HEAPU8: Module.HEAPU8,
        HEAPU32: Module.HEAPU32,
    };
};
