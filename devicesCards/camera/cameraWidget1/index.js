const favBtn = document.getElementById("fav");
const infoBtn = document.getElementById("info");
const recycleBtn = document.getElementById("recycle")

favBtn.addEventListener("click", () => {
  favBtn.classList.toggle("colored");
});
infoBtn.addEventListener("click", () => {
  infoBtn.classList.toggle("colored");
});
recycleBtn.addEventListener("click", () => {
  recycleBtn.classList.toggle("colored");
});

document.addEventListener('DOMContentLoaded', () => {
  const intensityRange = document.getElementById('intensityRange');
  const intensityCount = document.getElementById('intensityCount');
  const percentageValue = document.querySelector('.percentageValue');

  const updateIntensityCount = (event) => {
    const value = event.target.value;
    intensityCount.textContent = `${value}%`;
    percentageValue.innerHTML = `${value} <span>%</span>`;
  };

  intensityRange.addEventListener('input', updateIntensityCount);
});

//bottom content buttons;

const screen1Btn = document.getElementById("1Screens");
const screen2Btn = document.getElementById("2Screens");
const screen4Btn = document.getElementById("4Screens");
const screen9Btn = document.getElementById("9Screens");
const screen6Btn = document.getElementById("6Screens");

function clearSelections() {
    screen1Btn.classList.remove("selected");
    screen2Btn.classList.remove("selected");
    screen4Btn.classList.remove("selected");
    screen9Btn.classList.remove("selected");
    screen6Btn.classList.remove("selected");
}

screen1Btn.addEventListener("click", function () {
    clearSelections();
    screen1Btn.classList.add("selected");
});

screen2Btn.addEventListener("click", function () {
    clearSelections();
    screen2Btn.classList.add("selected");
});

screen4Btn.addEventListener("click", function () {
    clearSelections();
    screen4Btn.classList.add("selected");
});

screen9Btn.addEventListener("click", function () {
    clearSelections();
    screen9Btn.classList.add("selected");
});

screen6Btn.addEventListener("click", function () {
    clearSelections();
    screen6Btn.classList.add("selected");
});


//right container button contents to show it is selected by bg color
const talkModeBtn = document.getElementById("talkmodebtn");
const alarmOffModeBtn = document.getElementById("alarmoffmodebtn");
const privacyModeBtn = document.getElementById("privacymodebtn");
const recordingModeBtn = document.getElementById("recordingmodebtn");

function clearModeSelections() {
    talkModeBtn.classList.remove("selected");
    alarmOffModeBtn.classList.remove("selected");
    privacyModeBtn.classList.remove("selected");
    recordingModeBtn.classList.remove("selected");
}

talkModeBtn.addEventListener("click", function () {
    clearModeSelections();
    talkModeBtn.classList.add("selected");
});

alarmOffModeBtn.addEventListener("click", function () {
    clearModeSelections();
    alarmOffModeBtn.classList.add("selected");
});

privacyModeBtn.addEventListener("click", function () {
    clearModeSelections();
    privacyModeBtn.classList.add("selected");
});

recordingModeBtn.addEventListener("click", function () {
    clearModeSelections();
    recordingModeBtn.classList.add("selected");
});

//to apply toggle and other functionalilty
document.addEventListener('DOMContentLoaded', function() {
  const talkModeBtn = document.getElementById('talkmodebtn');
  const alarmOffModeBtn = document.getElementById('alarmoffmodebtn');
  const talkContent = document.getElementById('talkContent');
  const alarmOffContent = document.getElementById('alarmOffContent');

  function setMode(selectedBtn, selectedContent) {
    talkModeBtn.classList.remove('selected');
    alarmOffModeBtn.classList.remove('selected');
    
    talkContent.style.display = 'none';
    alarmOffContent.style.display = 'none';

    selectedBtn.classList.add('selected');
    selectedContent.style.display = 'flex';
    selectedContent.style.backgroundColor = "tranparent";
    // selectedContent.style.height = "50vh"
  }

  setMode(talkModeBtn, talkContent);

  talkModeBtn.addEventListener('click', function() {
    setMode(talkModeBtn, talkContent);
  });

  alarmOffModeBtn.addEventListener('click', function() {
    setMode(alarmOffModeBtn, alarmOffContent);
  });

  const customListItems = document.querySelectorAll('.customListItem');

  function toggleAdditionalContent(item) {
    const targetId = item.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    targetContent.classList.toggle('selected');
  }

  customListItems.forEach(item => {
    item.addEventListener('click', function() {
      toggleAdditionalContent(this);
    });
  });
});


//-------------------


/*fix code */
document.querySelector('[data-target="alarmTypeContent"]').addEventListener('click', function () {
  var targetContent = document.getElementById('alarmTypeContent');
  var downArrow = this.querySelector('.downArrow');
  
  if (targetContent.style.display === 'block') {
      targetContent.style.display = 'none';
      this.style.backgroundColor = '';
      this.querySelector('.leftSection img').src = './Alarm-type.svg'
      this.querySelector('.leftSection .itemIcon').style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
      if (downArrow) {
          downArrow.style.display = 'none';
      }
  } else {
      targetContent.style.display = 'block';
      this.style.backgroundColor = '#2f3134';
      if (downArrow) {
          downArrow.style.display = 'block';
      }
      this.querySelector('.leftSection img').src = './Alarm-type-blue.svg'
      this.querySelector('.leftSection .itemIcon').style.backgroundColor = '#fff'
  }
});

document.querySelector('[data-target="alarmSoundContent"]').addEventListener('click', function () {
  var targetContent = document.getElementById('alarmSoundContent');
  var downArrow = this.querySelector('.downArrow');
  
  if (targetContent.style.display === 'block') {
      targetContent.style.display = 'none';
      this.style.backgroundColor = '';
      this.querySelector('.leftSection img').src = './Ringing-Bell-Notification.svg'
      this.querySelector('.leftSection .itemIcon').style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
      if (downArrow) {
          downArrow.style.display = 'none';
      }
  } else {
      targetContent.style.display = 'block';
      this.style.backgroundColor = '#2f3134';
      if (downArrow) {
          downArrow.style.display = 'block';
      }
      this.querySelector('.leftSection img').src = './Ringing-Bell-blue.svg'
      this.querySelector('.leftSection .itemIcon').style.backgroundColor = '#fff'
  }
});

document.querySelector('[data-target="alarmScheduleContent"]').addEventListener('click', function () {
  var targetContent = document.getElementById('alarmScheduleContent');
  var downArrow = this.querySelector('.downArrow');
  
  if (targetContent.style.display === 'block') {
      targetContent.style.display = 'none';
      this.style.backgroundColor = '';
      this.querySelector('.leftSection img').src = './Alarm-Setting-Bolt-Schedule.svg'
      this.querySelector('.leftSection .itemIcon').style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
      if (downArrow) {
          downArrow.style.display = 'none';
      }
  } else {
      targetContent.style.display = 'block';
      this.style.backgroundColor = '#2f3134';
      if (downArrow) {
          downArrow.style.display = 'block';
      }
      this.querySelector('.leftSection img').src = './Alarm-Setting-Bolt-blue.svg'
      this.querySelector('.leftSection .itemIcon').style.backgroundColor = '#fff'
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.rbtmtopCont');
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });
//for my scrollbar
  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3;
    container.scrollLeft = scrollLeft - walk;
  });
});
