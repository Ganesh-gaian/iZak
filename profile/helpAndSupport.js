function selectButton(button) {
  var buttons = document.querySelectorAll(".Button");
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

// popup for privacy policy and contact
const privacyButton = document.getElementById("selectPrivacyPolicy");
const privacyPopup = document.getElementById("privacyPopup");
const contactButton = document.getElementById("selectContactUs");
const contactPopup = document.getElementById("contactPopup");
const popupBackdrop = document.getElementById("popupBackdrop");
const popupHeading = document.getElementById("popupHeading");

function showPopup(popup, headingText) {
    popup.style.display = "block";
    document.body.classList.add("blurred");
    popupBackdrop.style.display = "block";
    popupHeading.textContent = headingText;
    popupHeading.style.display = "block";
}

function hidePopup(popup) {
    popup.style.display = "none";
    document.body.classList.remove("blurred");
    popupBackdrop.style.display = "none";
    popupHeading.style.display = "none";
}

privacyButton.addEventListener("click", function () {
    showPopup(privacyPopup, "PRIVACY POLICY");
});

contactButton.addEventListener("click", function () {
    showPopup(contactPopup, "CONTACT US");
});

document.addEventListener("click", function (event) {
    if (
        !privacyPopup.contains(event.target) &&
        event.target !== privacyButton &&
        !privacyButton.contains(event.target)
    ) {
        hidePopup(privacyPopup);
    }

    if (
        !contactPopup.contains(event.target) &&
        event.target !== contactButton &&
        !contactButton.contains(event.target)
    ) {
        hidePopup(contactPopup);
    }

    if (event.target === popupBackdrop) {
        hidePopup(privacyPopup);
        hidePopup(contactPopup);
    }
});

// Add click event listeners to each button to redirect
redirect("switchAccount", "switchaccount.html");
redirect("manageAccountSettings", "manageaccount.html");
redirect("viewSubscription", "viewSubscription.html");
redirect("changePassword", "changePassword.html");

// for settings navigation
redirect("selectLanguage", "selectLanguage.html");
redirect("selectTheme", "selectTheme.html");
redirect("selectNotification", "selectNotification.html");
redirect("selectUnattendedMode", "selectUnattendedMode.html");
redirect("select3D", "select3D.html");

// for help and support navigation
redirect("selectFaqs", "selectFaqs.html");

