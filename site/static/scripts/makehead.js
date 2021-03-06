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
