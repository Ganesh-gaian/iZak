function redirect(buttonId, destination) {
    document.getElementById(buttonId).addEventListener('click', function() {
        window.location.href = destination;
    });
}


redirect('chooseAvatar', 'chooseAvatar.html');

function selectOption(option) {
    
    var options = document.querySelectorAll('.option');
    options.forEach(function(opt) {
        opt.classList.remove('selected');
    });

    
    var selectedOption = document.querySelector('.' + option);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }

    
    var detailsDiv = document.getElementById('details-' + option);
    if (detailsDiv) {
        
        var details = document.querySelectorAll('.details');
        details.forEach(function(div) {
            div.style.display = 'none';
        });

        detailsDiv.style.display = 'block';
    }
}