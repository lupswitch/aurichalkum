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

            var poolArray = new Uint8Array(outputLength), i=0, j=0, k=0;
            for(i=0; i<outputLength; i++){
                k = 0;
                for(j=0; j<8; j++){
                    k = k << 1 + fetched[i * 8 + j];
                };
                poolArray[i] = k;
            };


        };

        return this;
    };
});
