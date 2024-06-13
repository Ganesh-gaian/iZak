document.querySelector('.back-arrow').addEventListener('click', function() {
    
  window.location.href = 'landingpage.html';
});
document.querySelector('.nextButton').addEventListener('click', function() {
  
  window.location.href = 'createnewplaybook.html';
});



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
const plusSign = document.getElementById("plusSign");
const scannerPopup = document.getElementById("scannerPopup");

plusSign.addEventListener("click", function () {
    scannerPopup.style.display = "block";
});

document.addEventListener("click", function (event) {
    if (
        !scannerPopup.contains(event.target) &&
        event.target !== plusSign &&
        !plusSign.contains(event.target)
    ) {
        scannerPopup.style.display = "none";
    }
});


// for NEXT button popUp -----------------
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
