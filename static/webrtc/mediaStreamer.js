define(['jquery'], function($){ 
    navigator.getUserMedia = 
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia || 
        navigator.mozGetUserMedia
    ;

    return function(){

        var constraints = {audio: false, video: true};

        function successCallback(stream) {
            var video = document.querySelector('video');
            window.stream = stream; // stream available to console
            if (window.URL) {
                video.src = window.URL.createObjectURL(stream);
            } else {
                video.src = stream;
            }
        };

        function errorCallback(error){
          console.log("navigator.getUserMedia error: ", error);
        }

        navigator.getUserMedia(constraints, successCallback, errorCallback);
    }; 
});
