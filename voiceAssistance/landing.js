document.querySelector('.edit-image').addEventListener('click', function() {
    // Redirect to another HTML page
    window.location.href = 'editplaybook.html';
});

//pause button click


const playIcon = document.getElementsByClassName('play')[0];
console.log(playIcon)
const pauseIcon = document.getElementsByClassName('pause')[0];
playIcon.addEventListener('click', function() { 
playIcon.style.display="none";
pauseIcon.style.display="block"
})
pauseIcon.addEventListener('click', function() { 
    playIcon.style.display="block";
    pauseIcon.style.display="none"
    })