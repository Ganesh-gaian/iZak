const cards = [

    {
        id: 1,
        title: "Camera",
        subtitle: "TP Link • Outdoor Area",
        imgSrc: "./camera-img.svg",
        statusImg: "./Wifi Disabled.svg",
        status: "in use",
        action: "Manual Trigger",
        time: "12:00 AM",
        iconBase: false,
        iconOverlay: false,
        mode: false
      },
    {
      id: 2,
      title: "Vacuum",
      subtitle: "iRobot • Living Room",
      imgSrc: "./wirelessVacuumCleaner.svg",
      statusImg: "./Wifi Disabled.svg",
      status: "in use",
      action: "Manual Trigger",
      time: "12:00 AM",
      iconBase: "./Ellipse (2).svg",
      iconOverlay: "./Quiet Zone.svg",
      mode: "Quiet Mode"
    },
    {
      id: 3,
      title: "Carbon Monoxide Detector",
      subtitle: "SONOFF • Master Bedroom",
      imgSrc: "./ppm.svg",
      statusImg: "./Wifi Disabled.svg",
      status: "in use",
      action: "Manual Trigger",
      time: "12:00 AM",
      iconBase: false,
      iconOverlay: false,
      mode: false
    }
  ];
  
  function createCard(card) {
    const contentContainer = document.createElement('div');
    contentContainer.className = 'contentContainer';
  
    const topTextContents = document.createElement('div');
    topTextContents.className = 'topTextContents';
  
    const h2 = document.createElement('h2');
    h2.textContent = card.title;
  
    const p = document.createElement('p');
    p.textContent = card.subtitle;
  
    topTextContents.appendChild(h2);
    topTextContents.appendChild(p);
  
    const midContents = document.createElement('div');
    midContents.className = 'midContents';
  
    const midImgContents = document.createElement('div');
    midImgContents.className = 'midImgContents';
  
    const img = document.createElement('img');
    img.src = card.imgSrc;
    img.alt = "image";
  
    midImgContents.appendChild(img);
    midContents.appendChild(midImgContents);
  
    const lowerContents = document.createElement('div');
    lowerContents.className = 'lowerContents';
  
    const lowerLeft = document.createElement('div');
    lowerLeft.className = 'lowerLeft';
  
    const statusP = document.createElement('p');
    statusP.textContent = card.status;
  
    const actionH3 = document.createElement('h3');
    actionH3.textContent = card.action;
  
    const timeSpan = document.createElement('span');
    timeSpan.textContent = card.time;
  
    lowerLeft.appendChild(statusP);
    lowerLeft.appendChild(actionH3);
    lowerLeft.appendChild(timeSpan);
  
    lowerContents.appendChild(lowerLeft);
  
    // Conditionally add the lowerRight div
    if (card.iconBase && card.iconOverlay && card.mode) {
      const lowerRight = document.createElement('div');
      lowerRight.className = 'lowerRight';
  
      const lowerRightImgCont = document.createElement('div');
      lowerRightImgCont.className = 'lowerRightImgCont';
  
      const baseImage = document.createElement('img');
      baseImage.src = card.iconBase;
      baseImage.alt = "icon";
      baseImage.className = 'base-image';
  
      const overlayImage = document.createElement('img');
      overlayImage.src = card.iconOverlay;
      overlayImage.alt = "overlay icon";
      overlayImage.className = 'overlay-image';
  
      lowerRightImgCont.appendChild(baseImage);
      lowerRightImgCont.appendChild(overlayImage);
  
      const modeP = document.createElement('p');
      modeP.textContent = card.mode;
  
      lowerRight.appendChild(lowerRightImgCont);
      lowerRight.appendChild(modeP);
  
      lowerContents.appendChild(lowerRight);
    }
  
    // Create overlay
    const overlayContainer = document.createElement('div');
    overlayContainer.className = 'overlayContainer';
  
    const statusCont = document.createElement('div');
    statusCont.className = 'statusCont';
  
    const statusImg = document.createElement('img');
    statusImg.src = card.statusImg;
    statusImg.alt = "Camera Image";
    statusImg.className = 'statusImg';  
  
    statusCont.appendChild(statusImg);
  
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttonContainer';
  
    const resolveButton = document.createElement('button');
    resolveButton.className = 'resolveButton';
    resolveButton.innerHTML = `<img src="./resolve.svg" alt="Small Image" class="resolveImg"><span>Resolve</span>`;  // Unique class name for img
  
    buttonContainer.appendChild(resolveButton);
    statusCont.appendChild(buttonContainer);
    overlayContainer.appendChild(statusCont);
  
    contentContainer.appendChild(topTextContents);
    contentContainer.appendChild(midContents);
    contentContainer.appendChild(lowerContents);
    contentContainer.appendChild(overlayContainer);
  
    return contentContainer;
  }
  
  function displayCardById(cardId) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 
    const card = cards.find(card => card.id === cardId);
    if (card) {
      const cardElement = createCard(card);
      container.appendChild(cardElement);
    } else {
      container.innerHTML = '<p>Card not found</p>'; 
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    displayCardById(3); 
  });
  