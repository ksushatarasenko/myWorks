const audio = document.getElementById("audio");
const muteButton = document.getElementById("muteButton");
const volumeSlider = document.getElementById("volumeSlider");

muteButton.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteButton.textContent = audio.muted ? "❎" : "❌";
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Установите начальное значение громкости
audio.volume = volumeSlider.value;