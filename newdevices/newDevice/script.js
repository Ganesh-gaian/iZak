document.addEventListener("DOMContentLoaded", function () {
  const descriptionInput = document.getElementById("descriptionInput");
  const nameInput = document.getElementById("nameInput");
  const micIcon = document.getElementById("micIcon");
  const micIcon2 = document.getElementById("micIcon2");

  descriptionInput.addEventListener("input", () => {
    if (descriptionInput.value.length > 120) {
      descriptionInput.value = descriptionInput.value.slice(0, 120);
    }

    if (descriptionInput.value.length > 0) {
      micIcon.style.display = "none";
    } else {
      micIcon.style.display = "";
    }
  });

  nameInput.addEventListener("input", () => {
    if (nameInput.value.length > 0) {
      micIcon2.style.display = "none";
    } else {
      micIcon2.style.display = ""
    }
  });
});
