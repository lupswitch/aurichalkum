/*
 * Return a set of functions useful for doing cryptography.
 */
define([
    'asymmetric',
    'salsa20',
], function(asym, sym){
    return {
        symmetricCipher: sym,
    };
});
