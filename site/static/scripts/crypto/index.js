/*
 * Return a set of functions useful for doing cryptography.
 */
define([
    'ec/index',
    'salsa20',
    'random',
], function(asym, sym, rand){
    return function crypto(){
        var self = this;

        this.random = new rand();

        return this;
    };
});
