document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('chooseaccount').style.display = 'none';
    document.getElementById('otp-section').style.display = 'block';
  });