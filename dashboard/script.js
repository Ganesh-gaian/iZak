var updatingExists = document.getElementById("status").innerText.includes("Updating");

if (updatingExists) {
  document.getElementById("status").innerText = "Updating | 5 devices";
} else {
  document.getElementById("status").innerText = "Favourite Devices | 5 devices";
}
