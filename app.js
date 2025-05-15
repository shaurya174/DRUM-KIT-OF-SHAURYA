const btns = document.querySelectorAll(".drum");
const soundUrls = [
  "tom-1.mp3",
  "tom-2.mp3",
  "tom-3.mp3",
  "tom-4.mp3",
  "snare.mp3",
  "crash.mp3",
  "kick-bass.mp3",
];
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    btns[i].classList.add("pressed");
    let src = "./sounds/" + soundUrls[i];
    const audi = new Audio(src);
    audi.play();
    setTimeout(function () {
      btns[i].classList.remove("pressed");
    }, 100);
  });
}
const keys = ["w", "a", "s", "d", "j", "k", "l"];
let myy = null;
document.addEventListener("keydown", function (evt) {
  myy = evt.key;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] == myy) {
      btns[i].classList.add("pressed");
      let src = "./sounds/" + soundUrls[i];
      const audi = new Audio(src);
      audi.play();
      setTimeout(function () {
        btns[i].classList.remove("pressed");
      }, 100);
    }
  }
});
