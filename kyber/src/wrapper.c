#include "api.h"
#include "params.h"
#include "kem.h"

// Kyber512 wrappers
int pqcrystals_kyber512_ref_keypair(uint8_t *pk, uint8_t *sk) {
    return crypto_kem_keypair(pk, sk);
}

int pqcrystals_kyber512_ref_keypair_derand(uint8_t *pk, uint8_t *sk, const uint8_t *coins) {
    return crypto_kem_keypair_derand(pk, sk, coins);
}

int pqcrystals_kyber512_ref_enc(uint8_t *ct, uint8_t *ss, const uint8_t *pk) {
    return crypto_kem_enc(ct, ss, pk);
}

int pqcrystals_kyber512_ref_enc_derand(uint8_t *ct, uint8_t *ss, const uint8_t *pk, const uint8_t *coins) {
    return crypto_kem_enc_derand(ct, ss, pk, coins);
}

int pqcrystals_kyber512_ref_dec(uint8_t *ss, const uint8_t *ct, const uint8_t *sk) {
    return crypto_kem_dec(ss, ct, sk);
}

// Kyber768 wrappers
int pqcrystals_kyber768_ref_keypair(uint8_t *pk, uint8_t *sk) {
    return crypto_kem_keypair(pk, sk);
}

int pqcrystals_kyber768_ref_keypair_derand(uint8_t *pk, uint8_t *sk, const uint8_t *coins) {
    return crypto_kem_keypair_derand(pk, sk, coins);
}

int pqcrystals_kyber768_ref_enc(uint8_t *ct, uint8_t *ss, const uint8_t *pk) {
    return crypto_kem_enc(ct, ss, pk);
}

int pqcrystals_kyber768_ref_enc_derand(uint8_t *ct, uint8_t *ss, const uint8_t *pk, const uint8_t *coins) {
    return crypto_kem_enc_derand(ct, ss, pk, coins);
}

int pqcrystals_kyber768_ref_dec(uint8_t *ss, const uint8_t *ct, const uint8_t *sk) {
    return crypto_kem_dec(ss, ct, sk);
}

// Kyber1024 wrappers
int pqcrystals_kyber1024_ref_keypair(uint8_t *pk, uint8_t *sk) {
    return crypto_kem_keypair(pk, sk);
}

int pqcrystals_kyber1024_ref_keypair_derand(uint8_t *pk, uint8_t *sk, const uint8_t *coins) {
    return crypto_kem_keypair_derand(pk, sk, coins);
}

int pqcrystals_kyber1024_ref_enc(uint8_t *ct, uint8_t *ss, const uint8_t *pk) {
    return crypto_kem_enc(ct, ss, pk);
}

int pqcrystals_kyber1024_ref_enc_derand(uint8_t *ct, uint8_t *ss, const uint8_t *pk, const uint8_t *coins) {
    return crypto_kem_enc_derand(ct, ss, pk, coins);
}

int pqcrystals_kyber1024_ref_dec(uint8_t *ss, const uint8_t *ct, const uint8_t *sk) {
    return crypto_kem_dec(ss, ct, sk);
}