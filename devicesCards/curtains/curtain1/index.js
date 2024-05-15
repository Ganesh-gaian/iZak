document.addEventListener('DOMContentLoaded', () => {
    const openPercentInactiveDivs = document.querySelectorAll('.openPercentinacctive');
    const increaseDiv = document.querySelector('.increase');
    const decreaseDiv = document.querySelector('.decrease');
    const percentSpan = document.getElementById('percent');
  
    const toggleActiveInactive = (clickedDiv) => {
      openPercentInactiveDivs.forEach(div => {
        div.classList.remove('openPercentactive');
        div.classList.add('openPercentinacctive');
      });
      clickedDiv.classList.remove('openPercentinacctive');
      clickedDiv.classList.add('openPercentactive');
    };
  
    const handleIncreaseDecrease = (clickedDiv) => {
      const otherDiv = clickedDiv === increaseDiv ? decreaseDiv : increaseDiv;
      clickedDiv.classList.add('colored');
      otherDiv.classList.remove('colored');
  
      let currentPercent = parseInt(percentSpan.textContent);
      if (clickedDiv === increaseDiv && currentPercent < 100) {
        currentPercent++;
        if (currentPercent === 100) {
          increaseDiv.classList.add('disabled');
        }
      } else if (clickedDiv === decreaseDiv && currentPercent > 0) {
        currentPercent--;
        increaseDiv.classList.remove('disabled');
      }
      percentSpan.textContent = currentPercent + '%';
    };
  
    openPercentInactiveDivs.forEach(div => {
      div.addEventListener('click', () => {
        toggleActiveInactive(div);
        percentSpan.textContent = div.textContent.trim();
        increaseDiv.classList.remove('disabled');
      });
    });
  
    increaseDiv.addEventListener('click', () => {
      handleIncreaseDecrease(increaseDiv);
    });
  
    decreaseDiv.addEventListener('click', () => {
      handleIncreaseDecrease(decreaseDiv);
    });
  });
  