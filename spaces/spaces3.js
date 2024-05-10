// Get the container element
const container = document.querySelector('.Spaces3Content');

// Get the width of a single slide including margin
const slideWidth = container.querySelector('.deviceCont').offsetWidth;

// Handle sliding to the left
document.querySelector('.prev').addEventListener('click', function() {
  container.scrollBy({
    left: -slideWidth, // Scroll to the left by the width of a single slide
    behavior: 'smooth' // Add smooth scrolling effect
  });
});

// Handle sliding to the right
document.querySelector('.next').addEventListener('click', function() {
  container.scrollBy({
    left: slideWidth, // Scroll to the right by the width of a single slide
    behavior: 'smooth' // Add smooth scrolling effect
  });
});
