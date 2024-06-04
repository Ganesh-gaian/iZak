document.querySelector(".back-arrow").addEventListener("click", function () {
  
  window.location.href = "editplaybook.html";
});

function selectOption(option) {
  // Remove 'selected' class from all options
  var options = document.querySelectorAll(".option");
  options.forEach(function (opt) {
    opt.classList.remove("selected");
  });

  // Add 'selected' class to the clicked option
  var selectedOption = document.querySelector("." + option);
  if (selectedOption) {
    selectedOption.classList.add("selected");
  }

  var detailsDiv = document.getElementById("details-" + option);
  if (detailsDiv) {
    var details = document.querySelectorAll(".details");
    details.forEach(function (div) {
      div.style.display = "none";
    });

    detailsDiv.style.display = "block";
  }
}

function redirect(buttonId, destination) {
  document.getElementById(buttonId).addEventListener("click", function () {
    window.location.href = destination;
  });
}

function selectButton(button) {
  var buttons = document.querySelectorAll(".Button");
  buttons.forEach(function (btn) {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}


