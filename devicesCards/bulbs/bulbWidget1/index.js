const favBtn = document.getElementById("fav");

favBtn.addEventListener("click", () => {
  favBtn.classList.toggle("colored");
});

//percentage value change dynamically based on input range
document.addEventListener('DOMContentLoaded', () => {
  const intensityRange = document.getElementById('intensityRange');
  const intensityCount = document.getElementById('intensityCount');
  const percentageValue = document.querySelector('.percentageValue');

  // Function to update the intensity count and percentage value
  const updateIntensityCount = (event) => {
    const value = event.target.value;
    intensityCount.textContent = `${value}%`;
    percentageValue.innerHTML = `${value} <span>%</span>`;
  };

  // Add event listener to the range input
  intensityRange.addEventListener('input', updateIntensityCount);
});


//---------color picker
const colorSlider = document.getElementById('colorSlider');
const colorDisplay = document.getElementById('colorDisplay');

let selectedColor = '';

colorSlider.addEventListener('input', function() {
    const hue = colorSlider.value;
    selectedColor = `hsl(${hue}, 100%, 50%)`;
    colorDisplay.style.backgroundColor = selectedColor;
    console.log(selectedColor); 
});
