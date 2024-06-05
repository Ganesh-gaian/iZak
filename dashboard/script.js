var updatingExists = document
  .getElementById("status")
  .innerText.includes("Updating");

if (updatingExists) {
  document.getElementById("status").innerText = "Updating | 5 devices";
} else {
  document.getElementById("status").innerText = "Favourite Devices | 5 devices";
}

//for side nav animation
// Get all iconStyle elements
const icons = document.querySelectorAll('.iconStyle');

// Function to handle icon click event
function handleIconClick(event) {
    // Remove 'selected' class from all icons
    icons.forEach(icon => icon.classList.remove('selected'));
    // Add 'selected' class to the clicked icon
    event.currentTarget.classList.add('selected');
}

// Attach click event listener to each iconStyle element
icons.forEach(icon => icon.addEventListener('click', handleIconClick));

// Set the Dashboard element as selected by default
document.querySelector('[data-name="Dashboard"]').classList.add('selected');


