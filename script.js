const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => {
  key.addEventListener("mousedown", () => {
    play(key);
    isDown = true;
  });
});
function play(key) {
  const audio = document.getElementById(key.dataset.note);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.innerHTML = `<span>${key.dataset.note}</span>`;
  key.classList.add("active");
  audio.addEventListener("ended", () => {
    key.classList.remove("active");
    key.innerText = "";
  });
}
document.addEventListener("keydown", e => {
  if (e.repeat) return;
  const key = e.key;
  const wIndex = WHITE_KEYS.indexOf(key);
  const bIndex = BLACK_KEYS.indexOf(key);

  if (wIndex > -1) play(whiteKeys[wIndex]);
  if (bIndex > -1) play(blackKeys[bIndex]);
});
