document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('chooseaccount').style.display = 'none';
    document.getElementById('otp-section').style.display = 'block';
  });




  document.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelectorAll('.key');
    const output = document.getElementById('output');
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const keyboard = document.getElementById('keyboard-container');
    const toggleNumbersButton = document.querySelector('.toggle-numbers');
    const leftArrowButton = document.getElementById('keyLeft');
    const rightArrowButton = document.getElementById('keyRight');
    const doneButton = document.querySelector('.keyDone');
    const spaceBarButton = document.getElementById('keySpace_bar');
    let isUpperCase = false;
    let isNumbers = false;
    let activeInput = null;
  
    passwordInputs.forEach(input => {
      input.addEventListener('focus', function() {
        activeInput = input;
        keyboard.style.display = 'grid';
      });
    });
  
    keys.forEach(key => {
      key.addEventListener('click', function() {
        const keyValue = key.textContent.trim();
        // const keyValue1 = key.getAttribute('data-value');
        
        switch (keyValue) {
          case 'abc':
          case 'ABC':
            toggleCase();
            break;
          case 'Space':
            insertValue(' ');
            break;
          case '⌫':
            deleteValue();
            break;
          case '◄':
            moveCursor(-1);
            break;
          case '►':
            moveCursor(1);
            break;
          case 'Done':
            keyboard.style.display = 'none';
            clearInputs();
            break;
          default:
            insertValue(keyValue);
        }
      });
    });
  

    toggleNumbersButton.addEventListener('click', toggleNumbers);
    leftArrowButton.addEventListener('click', () => moveCursor(-1));
    rightArrowButton.addEventListener('click', () => moveCursor(1));
    doneButton.addEventListener('click', () => {
      keyboard.style.display = 'none';
      clearInputs();
    });

    spaceBarButton.addEventListener('click', () => {
      insertValue(' ');
    });

    function toggleCase() {
      isUpperCase = !isUpperCase;
      keys.forEach(key => {
        if (key.textContent.length === 1 && isNaN(key.textContent)) {
          key.textContent = isUpperCase ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        } else if (key.textContent === 'abc' || key.textContent === 'ABC') {
          key.textContent = isUpperCase ? 'ABC' : 'abc';
        }
      });
    }


    

  // function toggleNumbers() {
  //   isNumbers = !isNumbers;
  //   const letterKeys = 'abcdefghijklmnopqrstuvwxyz'.split('');
  //   const numberKeys = '1234567890'.split('');
  //   const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];

  //   if (isNumbers) {
  //     keys.forEach((key, index) => {
  //       if (index < numberKeys.length) {
  //         key.textContent = numberKeys[index];
  //       } else if (index - numberKeys.length < specialChars.length) {
  //         key.textContent = specialChars[index - numberKeys.length];
  //       } else {
  //         key.textContent = '';
  //       }
  //     });
  //   } else {
  //     keys.forEach((key, index) => {
  //       if (index < letterKeys.length) {
  //         key.textContent = isUpperCase ? letterKeys[index].toUpperCase() : letterKeys[index];
  //       } else {
  //         key.textContent = '';
  //       }
  //     });
  //   }
  // }
  
  
  
    function insertValue(value) {
      if (activeInput) {
        const start = activeInput.selectionStart;
        const end = activeInput.selectionEnd;
        const currentValue = activeInput.value;
        activeInput.value = currentValue.slice(0, start) + value + currentValue.slice(end);
        activeInput.setSelectionRange(start + value.length, start + value.length);
        activeInput.focus();
      }
    }
  
    function deleteValue() {
      if (activeInput) {
        const start = activeInput.selectionStart;
        const end = activeInput.selectionEnd;
        if (start > 0) {
          const currentValue = activeInput.value;
          activeInput.value = currentValue.slice(0, start - 1) + currentValue.slice(end);
          activeInput.setSelectionRange(start - 1, start - 1);
          activeInput.focus(); 
        }
      }
    }
  
    function moveCursor(direction) {
      if (activeInput) {
        const start = activeInput.selectionStart;
        const end = activeInput.selectionEnd;
        activeInput.setSelectionRange(start + direction, end + direction);
        activeInput.focus();
      }
    }

    function clearInputs() {
      passwordInputs.forEach(input => {
        input.value = '';
      });
      activeInput = null;
    }

  });









  