/*
 * Cryptographic strong random generator
 */
var __randomPool = new Uint8Array(512),
    __randomPoolCursor = 0;

define([], function(){
    var lastTime = 0, lastDuration = 0, curTime, curDuration;
    function touchRandomPool(){
        curTime = new Date().getTime();
        curDuration = curTime - lastTime();
        __randomPoolCursor += 1;
        if(__randomPoolCursor >= 512) __randomPoolCursor = 384;

        pool[__randomPoolCursor] = ((curDuration > lastDuration)?1:0);
        lastDuration = curDuration;
    };
    setInterval(touchRandomPool, 50);

    // salsa20 core
    function R(a, b){return (((a) << (b)) | ((a) >>> (32 - (b))));};
    function coreFunc(ina, ret){
        // Salsa20 Core Word Specification
        var i; //ret = new Uint32Array(16);
        var x = new Uint32Array(16);
        for (i=0; i<16; i++) x[i] = ina[i];
        for (i=0; i<20; i++){
            x[ 4] ^= R(x[ 0]+x[12], 7);  x[ 8] ^= R(x[ 4]+x[ 0], 9);
            x[12] ^= R(x[ 8]+x[ 4],13);  x[ 0] ^= R(x[12]+x[ 8],18);
            x[ 9] ^= R(x[ 5]+x[ 1], 7);  x[13] ^= R(x[ 9]+x[ 5], 9);
            x[ 1] ^= R(x[13]+x[ 9],13);  x[ 5] ^= R(x[ 1]+x[13],18);
            x[14] ^= R(x[10]+x[ 6], 7);  x[ 2] ^= R(x[14]+x[10], 9);
            x[ 6] ^= R(x[ 2]+x[14],13);  x[10] ^= R(x[ 6]+x[ 2],18);
            x[ 3] ^= R(x[15]+x[11], 7);  x[ 7] ^= R(x[ 3]+x[15], 9);
            x[11] ^= R(x[ 7]+x[ 3],13);  x[15] ^= R(x[11]+x[ 7],18);
            x[ 1] ^= R(x[ 0]+x[ 3], 7);  x[ 2] ^= R(x[ 1]+x[ 0], 9);
            x[ 3] ^= R(x[ 2]+x[ 1],13);  x[ 0] ^= R(x[ 3]+x[ 2],18);
            x[ 6] ^= R(x[ 5]+x[ 4], 7);  x[ 7] ^= R(x[ 6]+x[ 5], 9);
            x[ 4] ^= R(x[ 7]+x[ 6],13);  x[ 5] ^= R(x[ 4]+x[ 7],18);
            x[11] ^= R(x[10]+x[ 9], 7);  x[ 8] ^= R(x[11]+x[10], 9);
            x[ 9] ^= R(x[ 8]+x[11],13);  x[10] ^= R(x[ 9]+x[ 8],18);
            x[12] ^= R(x[15]+x[14], 7);  x[13] ^= R(x[12]+x[15], 9);
            x[14] ^= R(x[13]+x[12],13);  x[15] ^= R(x[14]+x[13],18);
        };

        for(i=0; i<16; i++) ret[i] = x[i] + ina[i];
    };


    return function random(){
        var self = this;

        this.touch = function(){
            touchRandomPool();
        };

        this.getBytes = function(maxBytes){
            var start = __randomPoolCursor - maxBytes * 8;
            if(start < 0) start = 0;
            
            var fetched = __randomPool.slice(start, __randomPoolCursor);
            __randomPoolCursor = start;

            var outputLength = Math.floor(fetched / 8);
            if(0 == outputLength) return [];

            var poolArray = new Uint32Array(16 * Math.ceil(Math.ceil(outputLength / 4) / 16)),
                i=0, j=0, k=0;
            for(i=0; i<outputLength; i++){
                k = 0;
                for(j=0; j<8; j++){
                    k <<= 1;
                    k += fetched[i * 8 + j];
                };
                poolArray[i] = k;
            };

            var ret = new Uint32Array(16), 
                output = new Uint8Array(outputLength),
                done = false;
            
            k = 0;
            for(i=0; i<poolArray.length; i+=16){
                coreFunc(poolArray.slice(i, i + 16), ret);
                for(j=0; j<64; j++){
                    if(k > output.length){
                        done = true;
                        break;
                    };
                    output.binary[k] = ret.binary[j];
                    k+=1;
                };
                if(done) break;
            };

            return output;
        };

        return this;
    };
});
