var updatingExists = document
  .getElementById("status")
  .innerText.includes("Updating");

if (updatingExists) {
  document.getElementById("status").innerText = "Updating | 5 devices";
} else {
  document.getElementById("status").innerText = "Favourite Devices | 5 devices";
}

//for sideNavbar 
const icons = document.querySelectorAll('.iconStyle');

function handleIconClick(event) {
    icons.forEach(icon => icon.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
}

icons.forEach(icon => icon.addEventListener('click', handleIconClick));

document.querySelector('[data-name="Dashboard"]').classList.add('selected');


