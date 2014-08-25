require([
    'jquery',
    'bootstrap',
    'crypto',
], function($, bootstrap, crypto){
    var srand = new crypto.util.srand();
    $(function(){
        $('body').mousemove(function(){
            srand.touch();

            var rand = srand.bytes(64);
            $('#private-key-display').val(crypto.util.encoding(rand).toHEX());
        });
    });
});
