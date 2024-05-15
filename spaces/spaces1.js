// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    var selectedImageWrapper = document.querySelector('.selectedImageWrapper img');
  
    var imageDivs = document.querySelectorAll('.imageDiv img');
  
    imageDivs.forEach(function (img) {
      img.addEventListener('click', function () {
        selectedImageWrapper.src = img.src;
      });
    });
  });

  // for popUp-----------------

  document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("openPopup");
    const closeButton = document.getElementById("closePopup");
    const popup = document.getElementById("popup");
  
    openButton.addEventListener("click", function() {
      popup.style.display = "block";
    });
  
    closeButton.addEventListener("click", function() {
      popup.style.display = "none";
    });
  });
  

  //QR scanner popup.

  document.addEventListener("DOMContentLoaded", function() {
    const plusSign = document.getElementById("plusSign");
    const scannerPopup = document.getElementById("scannerPopup");
  
    plusSign.addEventListener("click", function() {
      scannerPopup.style.display = "block";
    });
  
    // Close the popup when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!scannerPopup.contains(event.target) && event.target !== plusSign && !plusSign.contains(event.target)) {
        scannerPopup.style.display = "none";
      }
    });
});

  
  
  