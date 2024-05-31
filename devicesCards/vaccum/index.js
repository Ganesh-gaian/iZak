const favBtn = document.getElementById("fav");
const infoBtn = document.getElementById("info");
const recycleBtn = document.getElementById("recycle");

favBtn.addEventListener("click", () => {
  favBtn.classList.toggle("colored");
});
infoBtn.addEventListener("click", () => {
  infoBtn.classList.toggle("colored");
});
recycleBtn.addEventListener("click", () => {
  recycleBtn.classList.toggle("colored");
});

//for Quiet spireal etc buttons:
const quietModeBtn = document.getElementById("quietModeBtn");
const spiralModeBtn = document.getElementById("spiralModeBtn");
const chargingModeBtn = document.getElementById("chargingModeBtn");
const sideWallModeBtn = document.getElementById("sideWallModeBtn");

function removeColoredClass() {
  quietModeBtn.classList.remove("colored");
  spiralModeBtn.classList.remove("colored");
  chargingModeBtn.classList.remove("colored");
  sideWallModeBtn.classList.remove("colored");
}

quietModeBtn.addEventListener("click", () => {
  removeColoredClass();
  quietModeBtn.classList.add("colored");
});

spiralModeBtn.addEventListener("click", () => {
  removeColoredClass();
  spiralModeBtn.classList.add("colored");
});

chargingModeBtn.addEventListener("click", () => {
  removeColoredClass();
  chargingModeBtn.classList.add("colored");
});

sideWallModeBtn.addEventListener("click", () => {
  removeColoredClass();
  sideWallModeBtn.classList.add("colored");
});


// js for input range slider
const intensityRange = document.getElementById("intensityRange");
const intensityCount = document.getElementById("intensityCount");

intensityRange.addEventListener("input", () => {
  intensityCount.textContent = `${intensityRange.value}%`;
});

//timer
document.addEventListener('DOMContentLoaded', () => {
  const timerInputs = document.querySelectorAll('.timer-box');

  timerInputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
      }
    });
    
    input.addEventListener('keypress', (e) => {
      if (e.key < '0' || e.key > '9') {
        e.preventDefault();
      }
    });

    input.addEventListener('focus', (e) => {
      e.target.select();
    });
  });
});

