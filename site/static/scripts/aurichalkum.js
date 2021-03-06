require([
    'jquery',
    'bootstrap',
    'crypto',
    'modernizr',
], function($, bootstrap, crypto, modernizr){
var funcTree = {}, exportTree = {};
var tool = {
    'get': function(name){
        return funcTree[name];
    },
    'set': function(name, x){
        funcTree[name] = x;
        return tool;
    },
    'exp': function(path, x){
        var paths = path.split('.');
        var cursor = exportTree;
        for(var i in paths){
            if('undefined' == typeof cursor[paths[i]]){
                if(i == paths.length - 1){
                    cursor[paths[i]] = x;
                    break;
                };
                cursor[paths[i]] = {};
            };
            cursor = cursor[paths[i]];
        };
    },
};

tool
    .set('jquery', $)
    .set('bootstrap', bootstrap)
    .set('crypto', crypto)
    .set('modernizr', modernizr)
;

var main = null;
/*
 * Get file content.
 *
 * Usage:
 *  1 prepare a DOM object
 *  2 prepare a callback
 *  3 call tool.get('util.readFile')(DOMObject, Callback)
 *  4 Callback will be called in format (err, result). If err is not null,
 *    the result will be meaningless.
 */
(function(t){
    function getFile(domObj, callback){
    };

    tool.set('util.readFile', getFile);
})(tool);
/*
 * Entry point at the very beginning
 *
 * 1 reads the environment variables
 * 2 decide the IO system being used
 * 3 check all dependencies of browser functions
 * 4 fire IO system
 */

(function(t, main){
    
    main = function(){
    };
})(tool, main);
main();

});
