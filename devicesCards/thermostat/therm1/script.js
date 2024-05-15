const modeSpan = document.getElementById("mode");
const coolModeBtn = document.getElementById("coolmodebtn");
const heatModeBtn = document.getElementById("heatmodebtn");
const ecoModeBtn = document.getElementById("ecomodebtn");
const fanModeBtn = document.getElementById("fanmodebtn");

coolModeBtn.addEventListener("click", () => {
  modeSpan.textContent = "COOL";
  document.querySelectorAll(".chngmodebtn").forEach((btn) => {
    btn.classList.remove("colored");
  });
  coolModeBtn.classList.add("colored");
});

heatModeBtn.addEventListener("click", () => {
  modeSpan.textContent = "WARM";
  document.querySelectorAll(".chngmodebtn").forEach((btn) => {
    btn.classList.remove("colored");
  });
  heatModeBtn.classList.add("colored");
});

ecoModeBtn.addEventListener("click", () => {
  modeSpan.textContent = "ECONOMY";
  document.querySelectorAll(".chngmodebtn").forEach((btn) => {
    btn.classList.remove("colored");
  });
  ecoModeBtn.classList.add("colored");
});

fanModeBtn.addEventListener("click", () => {
  modeSpan.textContent = "FAN";
  document.querySelectorAll(".chngmodebtn").forEach((btn) => {
    btn.classList.remove("colored");
  });
  fanModeBtn.classList.add("colored");
});
