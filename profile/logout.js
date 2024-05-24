function selectButton(button) {
    // Remove 'selected' class from all buttons
    var buttons = document.querySelectorAll(".Button");
    buttons.forEach(function (btn) {
      btn.classList.remove("selected");
    });
  
    // Add 'selected' class to the clicked button
    button.classList.add("selected");
  }
  