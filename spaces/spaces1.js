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

  document.addEventListener("click", function (event) {
      if (
          !scannerPopup.contains(event.target) &&
          event.target !== plusSign &&
          !plusSign.contains(event.target)
      ) {
          scannerPopup.style.display = "none";
      }
  });
});

//for next button popup
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("openPopup");
  const popup = document.getElementById("popup");

  if (openButton && popup) {
    openButton.addEventListener("click", function () {
      popup.style.display = "block";
    });

    document.addEventListener("click", function (event) {
      if (
        !event.target.closest("#popup .popup-content") &&
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

const spbtn1 = document.getElementById("spbtn1");
const spbtn2 = document.getElementById("spbtn2");
const spbtn3 = document.getElementById("spbtn3");

spbtn1.addEventListener("click", function () {
  spbtn1.classList.add("selected");
  spbtn2.classList.remove("selected");
  spbtn3.classList.remove("selected");
});

spbtn2.addEventListener("click", function () {
  spbtn1.classList.remove("selected");
  spbtn2.classList.add("selected");
  spbtn3.classList.remove("selected");
});

spbtn3.addEventListener("click", function () {
  spbtn1.classList.remove("selected");
  spbtn2.classList.remove("selected");
  spbtn3.classList.add("selected");
});




// for assign devices div's buttons ---
const entertainmentBtn = document.getElementById("Entertainment");
const energyBtn = document.getElementById("Energy");
const ambienceBtn = document.getElementById("Ambience");
const utilityBtn = document.getElementById("utility");
const monitorBtn = document.getElementById("Monitor");
const bathBtn = document.getElementById("Bath");
const solarBtn = document.getElementById("solar");
const securityBtn = document.getElementById("Security");
const hazardBtn = document.getElementById("Hazard");

function clearSelections() {
    entertainmentBtn.classList.remove("selected");
    energyBtn.classList.remove("selected");
    ambienceBtn.classList.remove("selected");
    utilityBtn.classList.remove("selected");
    monitorBtn.classList.remove("selected");
    bathBtn.classList.remove("selected");
    solarBtn.classList.remove("selected");
    securityBtn.classList.remove("selected");
    hazardBtn.classList.remove("selected");
}

entertainmentBtn.addEventListener("click", function () {
    clearSelections();
    entertainmentBtn.classList.add("selected");
});

energyBtn.addEventListener("click", function () {
    clearSelections();
    energyBtn.classList.add("selected");
});

ambienceBtn.addEventListener("click", function () {
    clearSelections();
    ambienceBtn.classList.add("selected");
});

utilityBtn.addEventListener("click", function () {
    clearSelections();
    utilityBtn.classList.add("selected");
});

monitorBtn.addEventListener("click", function () {
    clearSelections();
    monitorBtn.classList.add("selected");
});

bathBtn.addEventListener("click", function () {
    clearSelections();
    bathBtn.classList.add("selected");
});

solarBtn.addEventListener("click", function () {
    clearSelections();
    solarBtn.classList.add("selected");
});

securityBtn.addEventListener("click", function () {
    clearSelections();
    securityBtn.classList.add("selected");
});

hazardBtn.addEventListener("click", function () {
    clearSelections();
    hazardBtn.classList.add("selected");
});

