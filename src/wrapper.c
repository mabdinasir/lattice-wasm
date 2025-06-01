#include "api.h"
#include <stdlib.h>
#include <string.h>

const uint8_t DEFAULT_CTX[] = "";
const size_t DEFAULT_CTX_LEN = 0;

// Wrapper for keypair generation (using Dilithium2)
int crypto_sign_keypair_wrapper(uint8_t *pk, uint8_t *sk) {
    return pqcrystals_dilithium2_ref_keypair(pk, sk);
}

// Wrapper for signing (using Dilithium2)
int crypto_sign_wrapper(uint8_t *sig, size_t *siglen,
            const uint8_t *msg, size_t msglen,
            const uint8_t *sk) {
    return pqcrystals_dilithium2_ref_signature(sig, siglen, msg, msglen,
                                              DEFAULT_CTX, DEFAULT_CTX_LEN, sk);
}

// Wrapper for verification (using Dilithium2)
int crypto_verify_wrapper(const uint8_t *sig, size_t siglen,
              const uint8_t *msg, size_t msglen,
              const uint8_t *pk) {
    return pqcrystals_dilithium2_ref_verify(sig, siglen, msg, msglen,
                                           DEFAULT_CTX, DEFAULT_CTX_LEN, pk);
}