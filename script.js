const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseButton.textContent = '▶️';
    }
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;
});

seekBar.addEventListener('input', () => {
    const newTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});

document.querySelectorAll('.player').forEach(player => {
    const audio = player.querySelector('.audio');
    const playPauseButton = player.querySelector('.play-pause');
    const seekBar = player.querySelector('.seek-bar');

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = '⏸️';
        } else {
            audio.pause();
            playPauseButton.textContent = '▶️';
        }
    });

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        seekBar.value = progress;
    });

    seekBar.addEventListener('input', () => {
        const newTime = (seekBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
    });
});

const players = document.querySelectorAll('.player');

players.forEach(player => {
    const audio = player.querySelector('.audio');
    const playPauseButton = player.querySelector('.play-pause');
    const seekBar = player.querySelector('.seek-bar');

    playPauseButton.addEventListener('click', () => {
        // Pausa todos los audios excepto el actual
        players.forEach(otherPlayer => {
            const otherAudio = otherPlayer.querySelector('.audio');
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherPlayer.querySelector('.play-pause').textContent = '▶️';
            }
        });

        // Alterna entre reproducir y pausar el audio actual
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = '⏸️';
        } else {
            audio.pause();
            playPauseButton.textContent = '▶️';
        }
    });

    // Actualiza la barra de progreso
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        seekBar.value = progress;
    });

    // Permite desplazarse en la barra de progreso
    seekBar.addEventListener('input', () => {
        const newTime = (seekBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
    });
});
