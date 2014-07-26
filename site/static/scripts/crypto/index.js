/*
 * Return a set of functions useful for doing cryptography.
 */
define([
    'ec/index',
    'salsa20',
], function(asym, sym){
    return {
        symmetricCipher: sym,
    };
});
