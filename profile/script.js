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

   // If the logout option is selected, handle the logout
   if (option === 'option7') {
    
    window.location.href = 'logout.html'; 
}
if (option === 'option4') {
    
    window.location.href = 'Wallet.html'; 
}


  if (option === "option3") {
    window.location.href = "rewards.html";
  }

  if (option === "option4") {
    window.location.href = "Wallet.html";
  }

  if (option === "option5") {
    window.location.href = "settings.html"
  }

  if (option === "option6") {
    window.location.href = "helpAndSupport.html"
  }

  if (option === "option7") {
    window.location.href = "logout.html";
  }


  if (option === "option3") {
    window.location.href = "rewards.html";
  }

  if (option === "option4") {
    window.location.href = "Wallet.html";
  }

  if (option === "option5") {
    window.location.href = "settings.html"
  }

  if (option === "option6") {
    window.location.href = "helpAndSupport.html"
  }

  if (option === "option7") {
    window.location.href = "logout.html";
  }

  // Show the details div corresponding to the clicked option
  var detailsDiv = document.getElementById("details-" + option);
  if (detailsDiv) {
    // Hide all other details divs
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

redirect("helpAndSupport", "helpAndSupport.html");
redirect("settings", "settings.html");
redirect("rewards", "rewards.html");




function Logout() {
  window.location.href = "logout.html";
}
