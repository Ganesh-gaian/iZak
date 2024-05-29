const favBtn = document.getElementById("fav");

favBtn.addEventListener("click", () => {
  favBtn.classList.toggle("colored");
});

document.addEventListener('DOMContentLoaded', () => {
  const intensityRange = document.getElementById('intensityRange');
  const intensityCount = document.getElementById('intensityCount');
  const percentageValue = document.querySelector('.percentageValue');

  const updateIntensityCount = (event) => {
    const value = event.target.value;
    intensityCount.textContent = `${value}%`;
    percentageValue.innerHTML = `${value} <span>%</span>`;
  };

  intensityRange.addEventListener('input', updateIntensityCount);
});

//-------------------
const days = document.querySelectorAll('.day');

days.forEach(day => {
  day.addEventListener('click', () => {
    day.classList.toggle('selected');
  });
});

const updateDisplay = (type, unit) => {
  const current = document.getElementById(`${type}-${unit}`);
  const prev = document.getElementById(`${type}-${unit}-prev`);
  const next = document.getElementById(`${type}-${unit}-next`);

  let value = parseInt(current.innerText);
  prev.innerText = (value - 1 < 0 ? 59 : value - 1).toString().padStart(2, '0');
  next.innerText = (value + 1 > (unit === 'hour' ? 23 : 59) ? 0 : value + 1).toString().padStart(2, '0');
};

const changeTime = (type, direction) => {
  const current = document.getElementById(type);
  let value = parseInt(current.innerText);

  if (type.includes('hour')) {
    value = (value + direction + 24) % 24;
  } else {
    value = (value + direction + 60) % 60;
  }

  value = value.toString().padStart(2, '0');
  current.innerText = value;

  const [prefix, unit] = type.split('-');
  updateDisplay(prefix, unit);
};

updateDisplay('start-hour', 'hour');
updateDisplay('start-minute', 'minute');
updateDisplay('end-hour', 'hour');
updateDisplay('end-minute', 'minute');
