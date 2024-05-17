document.querySelector('.back-arrow').addEventListener('click', function() {
    // Redirect to another HTML page
    window.location.href = 'landingpage.html';
});
document.querySelector('.nextButton').addEventListener('click', function() {
    // Redirect to another HTML page
    window.location.href = 'createnewplaybook.html';
});



// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    var selectedImageWrapperr = document.querySelector(
      ".selectedImageWrapperr img"
    );
  
    var imageDivs = document.querySelectorAll(".imageDiv1 img");
  
    imageDivs.forEach(function (img) {
      img.addEventListener("click", function () {
        selectedImageWrapperr.src = img.src;
      });
    });
  });
  
  //QR scanner popup.
  document.addEventListener("DOMContentLoaded", function () {
    const plusSign1 = document.getElementById("plusSign1");
    const scannerPopup1 = document.getElementById("scannerPopup1");
  
    plusSign.addEventListener("click", function () {
      scannerPopupp.style.display = "block";
    });
  
    // Close the popup when clicking outside of it
    document.addEventListener("click", function (event) {
      if (
        !scannerPopupp.contains(event.target) &&
        event.target !== plusSignn &&
        !plusSignn.contains(event.target)
      ) {
        scannerPopupp.style.display = "none";
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