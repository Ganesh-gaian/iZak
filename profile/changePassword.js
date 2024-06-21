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
    let isUpperCase = false;
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
        
        switch (keyValue) {
          case 'abc':
          case 'ABC':
            toggleCase();
            break;
          case 'Space':
            insertValue(' ');
            break;
          case 'Backspace':
            deleteValue();
            break;
          case '←':
            moveCursor(-1);
            break;
          case '→':
            moveCursor(1);
            break;
          case 'Done':
            keyboard.style.display = 'none';
            break;
          default:
            insertValue(keyValue);
        }
      });
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
  });



  