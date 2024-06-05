// Play and Pause functionality
const playIcon = document.getElementsByClassName("play")[0];
const pauseIcon = document.getElementsByClassName("pause")[0];
playIcon.addEventListener("click", function () {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
});
pauseIcon.addEventListener("click", function () {
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
});

// POPUP:
const popup = document.getElementById("popup");
const playPopup = document.getElementById("playPopup");
const overlay = document.querySelector(".overlay");

function showModals() {
  overlay.style.display = "block";
  popup.style.display = "flex";

  setTimeout(() => {
    popup.style.display = "none";
    playPopup.style.display = "flex";
  }, 3000);
}

document.body.addEventListener("click", showModals);

const closeButton = document.querySelector("#popup .close-btn");
const playCloseBtn = playPopup.querySelector(".close-btn");

if (closeButton) {
  closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.style.display = "none";
    overlay.style.display = "none";
  });
}
if (playCloseBtn) {
  playCloseBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playPopup.style.display = "none";
    overlay.style.display = "none";
  });
}

window.addEventListener("click", (event) => {
  if (event.target === playPopup) {
    playPopup.style.display = "none";
  }
});
