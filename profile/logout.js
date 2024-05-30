function selectButton(button) {
    
    var buttons = document.querySelectorAll(".Button");
    buttons.forEach(function (btn) {
      btn.classList.remove("selected");
    });
  
    
    button.classList.add("selected");
  }
  