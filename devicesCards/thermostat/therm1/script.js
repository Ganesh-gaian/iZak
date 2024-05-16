const modeSpan = document.getElementById("mode");
const tempSpan = document.getElementById("temp");
const coolModeBtn = document.getElementById("coolmodebtn");
const heatModeBtn = document.getElementById("heatmodebtn");
const ecoModeBtn = document.getElementById("ecomodebtn");
const fanModeBtn = document.getElementById("fanmodebtn");
const favBtn = document.getElementById("fav");
const fanSpeedRange = document.getElementById("fanSpeedRange");
const speedCount = document.getElementById("speedCount");


coolModeBtn.addEventListener("click", () => {
  modeSpan.textContent = "COOL";
  tempSpan.textContent = "25°F";
  document.querySelectorAll(".chngmodebtn").forEach((btn) => {
    btn.classList.remove("colored");
  });
  coolModeBtn.classList.add("colored");
});

heatModeBtn.addEventListener("click", () => {
  modeSpan.textContent = "WARM";
  tempSpan.textContent = "97°F";
  document.querySelectorAll(".chngmodebtn").forEach((btn) => {
    btn.classList.remove("colored");
  });
  heatModeBtn.classList.add("colored");
});

ecoModeBtn.addEventListener("click", () => {
  modeSpan.textContent = "ECONOMY";
  tempSpan.textContent = "64°F";
  document.querySelectorAll(".chngmodebtn").forEach((btn) => {
    btn.classList.remove("colored");
  });
  ecoModeBtn.classList.add("colored");
});

fanModeBtn.addEventListener("click", () => {
  modeSpan.textContent = "FAN";
  tempSpan.textContent = "47°F";
  document.querySelectorAll(".chngmodebtn").forEach((btn) => {
    btn.classList.remove("colored");
  });
  fanModeBtn.classList.add("colored");
});

favBtn.addEventListener("click", () => {
  favBtn.classList.toggle("colored");
});

fanSpeedRange.addEventListener("input", (event) => {
  speedCount.textContent = event.target.value;
});