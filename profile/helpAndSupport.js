function selectButton(button) {
  var buttons = document.querySelectorAll(".Button");
  buttons.forEach(function (btn) {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");

  setTimeout(function () {
    var option = button.id; 
    if (option === "selectFaqs") {
      window.location.href = "selectFaqs.html";
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

// Modal for privacy policy and contact
const privacyButton = document.getElementById("selectPrivacyPolicy");
const privacyPopup = document.getElementById("privacyPopup");
const contactButton = document.getElementById("selectContactUs");
const contactPopup = document.getElementById("contactPopup");
const popupBackdrop = document.getElementById("popupBackdrop");

function showPopup(popup) {
    popup.style.display = "block";
    popupBackdrop.style.display = "block";
    document.body.classList.add("blurred");
}

function hidePopup(popup) {
    popup.style.display = "none";
    popupBackdrop.style.display = "none";
    document.body.classList.remove("blurred");
}

privacyButton.addEventListener("click", function () {
    showPopup(privacyPopup);
});

contactButton.addEventListener("click", function () {
    showPopup(contactPopup);
});

document.addEventListener("click", function (event) {
    if (!privacyPopup.contains(event.target) && event.target !== privacyButton) {
        hidePopup(privacyPopup);
    }

    if (!contactPopup.contains(event.target) && event.target !== contactButton) {
        hidePopup(contactPopup);
    }

    if (event.target === popupBackdrop) {
        hidePopup(privacyPopup);
        hidePopup(contactPopup);
    }
});


// for help and support navigation
redirect("selectFaqs", "selectFaqs.html");

// routing for different screens
redirect("option", "index.html");
redirect("option2", "history.html");
redirect("option", "rewards.html");
redirect("option", "wallet.html");
redirect("option", "settings.html");
redirect("option", "helpAndSupport.html");


