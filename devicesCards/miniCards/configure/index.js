const devices = [
    {
        id: 'configCameraDevice',
        title: 'Camera',
        location: 'TP Link • Outdoor Area',
        isNew: true,
        statusImg: './camera-img.svg',  
        configureImg: 'https://izak.aidtaas.com/svg/configure.svg',
        background: "#6a6969",
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
    },
    {
        id: 'configCarbonDevice',
        title: 'Carbon Monoxide Detector',
        location: 'SONOFF • Master Bedroom',
        isNew: true,
        statusImg: "./ppm.svg",
        configureImg: 'https://izak.aidtaas.com/svg/configure.svg',
        background: "#6a6969",
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
    },
    {
        id: 'updateVaccum',
        title: 'Vacuum',
        location: 'iRobot • Living Room',
        isNew: true,
        statusImg: "./wirelessVaccumCleaner.svg",
        configureImg: 'https://izak.aidtaas.com/svg/configure.svg',
        background: "#6a6969",
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
    }
];

function createDeviceCard(device) {
    const deviceCont = document.createElement('div');
    deviceCont.className = 'deviceCont';
    deviceCont.style.background = device.background;
    deviceCont.style.boxShadow = device.boxShadow;

    const span8 = document.createElement('span');
    span8.id = 'span8';
    span8.textContent = device.title;

    const span9 = document.createElement('span');
    span9.id = 'span9';
    span9.textContent = device.location;

    const newDiv = document.createElement('div');
    newDiv.className = 'new';
    newDiv.textContent = 'New';
    if (!device.isNew) newDiv.style.display = 'none';

    const statusCont = document.createElement('div');
    statusCont.className = 'statusCont';

    const statusImg = document.createElement('img');
    statusImg.src = device.statusImg;
    statusImg.alt = '';

    if (device.id === 'configCarbonDevice') {
        const statusText = document.createElement('span');
        statusText.className = 'statusText';
        statusText.textContent = '574 ppm';
        statusCont.appendChild(statusText);
    }

    const dbottomContnd = document.createElement('div');
    dbottomContnd.className = 'dbottomContnd';

    const inner = document.createElement('div');
    inner.className = 'inner';

    const configureImg = document.createElement('img');
    configureImg.src = device.configureImg;
    configureImg.alt = '';

    const configureSpan = document.createElement('span');
    configureSpan.textContent = 'Configure';

    inner.appendChild(configureImg);
    inner.appendChild(configureSpan);

    dbottomContnd.appendChild(inner);
    statusCont.appendChild(statusImg);

    deviceCont.appendChild(span8);
    deviceCont.appendChild(span9);
    deviceCont.appendChild(newDiv);
    deviceCont.appendChild(statusCont);
    deviceCont.appendChild(dbottomContnd);

    return deviceCont;
}

function displayDevice(deviceId) {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = '';

    const device = devices.find(d => d.id === deviceId);
    if (device) {
        const deviceCard = createDeviceCard(device);
        contentContainer.appendChild(deviceCard);
    }
}

displayDevice('configCarbonDevice');
