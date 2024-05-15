document.getElementById("saveButton").addEventListener("click", function() {

    window.location.href = "editdetails.html";
});





function selectOption(option) {
    // Remove 'selected' class from all options
    var options = document.querySelectorAll('.option');
    options.forEach(function(opt) {
        opt.classList.remove('selected');
    });

    // Add 'selected' class to the clicked option
    var selectedOption = document.querySelector('.' + option);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }

    // Show the details div corresponding to the clicked option
    var detailsDiv = document.getElementById('details-' + option);
    if (detailsDiv) {
        // Hide all other details divs
        var details = document.querySelectorAll('.details');
        details.forEach(function(div) {
            div.style.display = 'none';
        });

        detailsDiv.style.display = 'block';
    }
}



function redirect(buttonId, destination) {
    document.getElementById(buttonId).addEventListener('click', function() {
        window.location.href = destination;
    });
}

// Add click event listeners to each button
redirect('chooseAvatar', 'chooseAvatar.html');

