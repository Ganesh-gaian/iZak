function selectButton(button) {
  var buttons = document.querySelectorAll(".ButtonSetting");
  buttons.forEach(function (btn) {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");

  setTimeout(function () {
    var option = button.id; 
    if (option === "selectLanguage") {
      window.location.href = "selectLanguage.html";
    }
    if (option === "selectTheme") {
      window.location.href = "selectTheme.html";
    }
    if (option === "selectNotification") {
      window.location.href = "selectNotification.html";
    }
    if (option === "select3D") {
      window.location.href = "select3D.html";
    }
    if (option === "selectUnattendedMode") {
      window.location.href = "selectUnattendedMode.html";
    }
  }, 100); 
}

//from index.js
function selectOption(option) {
  var options = document.querySelectorAll(".option");
  options.forEach(function (opt) {
    opt.classList.remove("selected");
  });

  var selectedOption = document.querySelector("." + option);
  if (selectedOption) {
    selectedOption.classList.add("selected");
  }

  if (option === "option1") {
    window.location.href = "index.html";
  }
  if (option === "option2") {
    window.location.href = "history.html";
  }

  if (option === "option3") {
    window.location.href = "rewards.html";
  }

  if (option === "option4") {
    window.location.href = "Wallet.html";
  }

  if (option === "option5") {
    window.location.href = "settings.html";
  }

  if (option === "option6") {
    window.location.href = "helpAndSupport.html";
  }

  if (option === "option7") {
    window.location.href = "logout.html";
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

//for index.html navigation. // Add click event listeners to each button
redirect("option", "index.html");
redirect("option", "rewards.html");
redirect("option", "wallet.html");
redirect("option", "settings.html");
redirect("option", "helpAndSupport.html");


// for settings navigation
redirect("selectLanguage", "selectLanguage.html");
redirect("selectTheme" , "selectTheme.html");
redirect("selectNotification", "selectNotification.html");
redirect("selectUnattendedMode", "selectUnattendedMode.html");
redirect("select3D", "select3D.html");

// for help and support navigation
redirect("selectFaqs", "selectFaqs.html"); 
redirect("selectPrivacyPolicy", "selectPrivacyPolicy.html");
redirect("selectContactUs", "selectContactUs.html");
