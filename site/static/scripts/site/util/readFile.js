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
