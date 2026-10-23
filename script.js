const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async function () {
    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent = "♫ Musik Aktif";
        } catch (error) {
            alert("Lagu gagal diputar. Periksa nama dan lokasi file MP3.");
        }
    } else {
        music.pause();
        musicButton.textContent = "♫ Putar Musik";
    }
});