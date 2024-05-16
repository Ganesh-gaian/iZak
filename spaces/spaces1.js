// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  var selectedImageWrapper = document.querySelector(
    ".selectedImageWrapper img"
  );

  var imageDivs = document.querySelectorAll(".imageDiv img");

  imageDivs.forEach(function (img) {
    img.addEventListener("click", function () {
      selectedImageWrapper.src = img.src;
    });
  });
});

//QR scanner popup.
document.addEventListener("DOMContentLoaded", function () {
  const plusSign = document.getElementById("plusSign");
  const scannerPopup = document.getElementById("scannerPopup");

  plusSign.addEventListener("click", function () {
    scannerPopup.style.display = "block";
  });

  // Close the popup when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !scannerPopup.contains(event.target) &&
      event.target !== plusSign &&
      !plusSign.contains(event.target)
    ) {
      scannerPopup.style.display = "none";
    }kk
  });
});

// for NEXT button popUp -----------------
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("openPopup");
  const popup = document.getElementById("popup");

  if (openButton && popup) {
    openButton.addEventListener("click", function () {
      popup.style.display = "block";
    });

    // Close the popup when clicking outside of popup-content
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest(".popup-content") &&
        event.target !== openButton
      ) {
        popup.style.display = "none";
      }
    });
  } else {
    console.error("One or more elements are missing: openButton, popup");
  }
});

// for button the text "Add this space to"----
function selectSpace1Button(button) {
  // Remove the 'selected' class from all buttons
  var buttons = document.querySelectorAll('.space1button');
  buttons.forEach(function(btn) {
    btn.classList.remove('selected');
  });
  
  // Add the 'selected' class to the clicked button
  button.classList.add('selected');
}

// for assign devices div's buttons ---
function selectSpace1RightButton(button) {
  // Remove the 'selected' class from all buttons
  var buttons = document.querySelectorAll('.space1Rightbutton');
  buttons.forEach(function(btn) {
    btn.classList.remove('selected');
  });
  
  // Add the 'selected' class to the clicked button
  button.classList.add('selected');
}
