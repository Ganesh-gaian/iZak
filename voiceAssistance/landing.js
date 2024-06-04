//for pause button
const playIcon = document.getElementsByClassName("play")[0];
console.log(playIcon);
const pauseIcon = document.getElementsByClassName("pause")[0];
playIcon.addEventListener("click", function () {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
});
pauseIcon.addEventListener("click", function () {
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
});

//Listening POPUP:
const popup = document.getElementById("popup");
const closeButton = document.querySelector(".close-btn");

document.body.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeButton.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.style.display = "none";
});

//-------Another Popup  for Action
const playButton = document.querySelector(".pause-image .play");
const playPopup = document.getElementById("playPopup");
const closeBtn = playPopup.querySelector(".close-btn");

if (playButton) {
  playButton.addEventListener("click", (e) => {
    e.stopPropagation();
    playPopup.style.display = "flex";
  });
}

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  playPopup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === playPopup) {
    playPopup.style.display = "none";
  }
});

// const playPopup = document.getElementById("playPopup");
// const closeBtn = document.querySelector(".close-btn");

// document.body.addEventListener("click", () => {
//   playPopup.style.display = "flex";
// });

// closeBtn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   playPopup.style.display = "none";
// });

