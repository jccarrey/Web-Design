var myVideo = document.getElementById("video-hero");

    // Agrega un evento para detectar cuando el video ha terminado
    myVideo.addEventListener("ended", function() {
        // Reinicia la reproducción al principio del video
        myVideo.currentTime = 0;
        myVideo.play();
    });