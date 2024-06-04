function selectOption(option) {
  var options = document.querySelectorAll(".option");
  options.forEach(function(opt) {
      opt.classList.remove("selected");
      opt.style.borderRadius = ''; 
      opt.style.background = ''; 
      opt.style.backdropFilter = ''; 
      opt.style.color = ''; 
  });

  var selectedOption = document.querySelector("." + option);
  if (selectedOption) {
      selectedOption.classList.add("selected");
      selectedOption.style.borderRadius = '8px';
      selectedOption.style.background = 'linear-gradient(96deg, #0b82f9 0.58%, #00478e 100%)';
      selectedOption.style.backdropFilter = 'blur(6.87976598739624px)';
      selectedOption.style.color = 'white';
  }

  var detailsDiv = document.getElementById("details-" + option);
  if (detailsDiv) {
      var details = document.querySelectorAll(".details");
      details.forEach(function(div) {
          div.style.display = "none";
      });

      detailsDiv.style.display = "block";
  }
}

function redirect(buttonId, destination) {
  document.getElementById(buttonId).addEventListener("click", function () {
    window.location.href = destination;
  });
}

// for settings navigation
redirect("selectLanguage", "selectLanguage.html");
redirect("selectTheme" , "selectTheme.html");
redirect("selectNotification", "selectNotification.html");
redirect("selectUnattendedMode", "selectUnattendedMode.html");
redirect("select3D", "select3D.html");

// for help and support navigation
redirect("selectFaqs", "selectFaqs.html"); 


