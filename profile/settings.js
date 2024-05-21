function selectButton(button) {
  // Remove 'selected' class from all buttons
  var buttons = document.querySelectorAll(".Button");
  buttons.forEach(function (btn) {
    btn.classList.remove("selected");
  });

  // Add 'selected' class to the clicked button
  button.classList.add("selected");

  setTimeout(function () {
    var option = button.id; // Use the id of the button to get the option
    if (option === "selectLanguage") {
      window.location.href = "selectLanguage.html";
    }
    if (option === "selectTheme") {
      window.location.href = "selectTheme.html";
    }
    if (option === "selectNotification") {
      window.location.href = "selectNotification.html";
    }
  }, 100); 
}

function selectOption(option) {
  var options = document.querySelectorAll(".option");
  options.forEach(function (opt) {
    opt.classList.remove("selected");
  });

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

// Add click event listeners to each button to redirect
redirect("switchAccount", "switchaccount.html");
redirect("manageAccountSettings", "manageaccount.html");
redirect("viewSubscription", "viewSubscription.html");
redirect("changePassword", "changePassword.html");

redirect("selectLanguage", "selectLanguage.html");
redirect("selectTheme" , "selectTheme.html")
redirect("selectNotification", "selectNotification.html")
redirect("selectUnattendedMode", "selectUnattendedMode.html")
redirect("select3D", "select3D.html")
