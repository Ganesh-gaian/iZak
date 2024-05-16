function selectButton(button) {
    // Remove the 'selected' class from all buttons
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('selected');
    }
    // Add the 'selected' class to the clicked button
    button.classList.add('selected');
  }
  