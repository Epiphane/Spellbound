var newBuzzSound = (function() {
    // Handle volume changes
    var muter = document.getElementById('mute');
    var gameMuted = localStorage.getItem('mute') || false;

    // Set the graphic
    var i = muter.children[0];
    if (gameMuted)
        i.setAttribute('class', 'fa fa-volume-off');
    else
        i.setAttribute('class', 'fa fa-volume-up');

    // Initialize all audio

    // Set buzz defaults
    buzz.defaults.volume = 50;

    muter.onclick = function() {
        gameMuted = !gameMuted;

        if (gameMuted) {
            i.setAttribute('class', 'fa fa-volume-up');
            buzz.all().mute();
        }
        else {
            i.setAttribute('class', 'fa fa-volume-off');
            buzz.all().unmute();
        }

        document.getElementById('game-canvas').focus()

        localStorage.setItem('mute', gameMuted);
    };

    return function(src, options) {
        var sound = new buzz.sound(src, options);

        if (gameMuted) {
            sound.mute();
        }

        return sound;
    }
})();