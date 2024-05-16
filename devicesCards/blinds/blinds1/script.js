document.addEventListener('DOMContentLoaded', () => {
  const openPercentInactiveDivs = document.querySelectorAll('.openPercentinacctive');
  const increaseDiv = document.querySelector('.increase');
  const decreaseDiv = document.querySelector('.decrease');
  const percentSpan = document.getElementById('percent');
  const favBtn = document.getElementById("fav");
  const infoBtn = document.getElementById("info");
  const blindsImg = document.querySelector('.leftBtmCont img');

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
    updateBlindsImage(currentPercent); // Update image based on current percent
  };

  const updateBlindsImage = (percentValue) => {
    if (percentValue <= 25) {
      blindsImg.src = "/devicesCards/blinds/blinds1/25.png";
    } else if (percentValue <= 50) {
      blindsImg.src = "/devicesCards/blinds/blinds1/50.png";
    } else if (percentValue <= 75) {
      blindsImg.src = "/devicesCards/blinds/blinds1/75.png";
    } else {
      blindsImg.src = "/devicesCards/blinds/blinds1/100.png";
    }
  };

  openPercentInactiveDivs.forEach(div => {
    div.addEventListener('click', () => {
      toggleActiveInactive(div);
      const newPercent = parseInt(div.textContent.trim());
      percentSpan.textContent = newPercent + '%';
      increaseDiv.classList.remove('disabled');
      updateBlindsImage(newPercent); 
    });
  });

  increaseDiv.addEventListener('click', () => {
    handleIncreaseDecrease(increaseDiv);
  });

  decreaseDiv.addEventListener('click', () => {
    handleIncreaseDecrease(decreaseDiv);
  });

  favBtn.addEventListener("click", () => {
    favBtn.classList.toggle("colored");
  });

  infoBtn.addEventListener("click", () => {
    infoBtn.classList.add("colored")
  })

  updateBlindsImage(parseInt(percentSpan.textContent));
});
