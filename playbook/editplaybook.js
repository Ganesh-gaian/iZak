document.querySelector(".icon1").addEventListener("click", function () {
  window.location.href = "editplaybooktriggers.html";
});
document.querySelector(".icon2").addEventListener("click", function () {
  window.location.href = "editplaybooktriggers.html";
});
document.querySelector(".icon3").addEventListener("click", function () {
  window.location.href = "editplaybooktriggers.html";
});
document.querySelector(".back-arrow").addEventListener("click", function () {
  window.location.href = "landingpage.html";
});

//for next button popup
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("openPopUp");
  const popup = document.getElementById("popupp");

  if (openButton && popup) {
    openButton.addEventListener("click", function () {
      popup.style.display = "block";
    });

    document.addEventListener("click", function (event) {
      if (
        !event.target.closest("#popupp .popup-content") &&
        event.target !== openButton
      ) {
        popup.style.display = "none";
      }
    });
  } else {
    console.error("One or more elements are missing: openButton, popup");
  }
});
