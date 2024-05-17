const modeSpan = document.getElementById("mode");
const tempSpan = document.getElementById("temp");

const favBtn = document.getElementById("fav");
const fanSpeedRange = document.getElementById("fanSpeedRange");
const speedCount = document.getElementById("speedCount");



favBtn.addEventListener("click", () => {
  favBtn.classList.toggle("colored");
});

fanSpeedRange.addEventListener("input", (event) => {
  speedCount.textContent = event.target.value;
});



//---------color picker
const colorSlider = document.getElementById('colorSlider');
const colorDisplay = document.getElementById('colorDisplay');

let selectedColor = '';

colorSlider.addEventListener('input', function() {
    const hue = colorSlider.value;
    selectedColor = `hsl(${hue}, 100%, 50%)`;
    colorDisplay.style.backgroundColor = selectedColor;
    // You can use the selectedColor variable elsewhere in your HTML file
    console.log(selectedColor); 
});
