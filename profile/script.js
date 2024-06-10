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

// Add click event listeners to each button
redirect("switchAccount", "switchaccount.html");
redirect("manageAccountSettings", "manageaccount.html");
redirect("viewSubscription", "viewSubscription.html");
redirect("changePassword", "changePassword.html");

// routing for different screens from index.html
redirect("option", "index.html");
redirect("option","history.html");
redirect("option", "rewards.html");
redirect("option", "wallet.html");
redirect("option", "settings.html");
redirect("option", "helpAndSupport.html");
