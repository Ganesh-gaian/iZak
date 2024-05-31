const devices = [
    {
        id: "updateCameraDevice",
        title: "Camera",
        location: "TP Link • Outdoor Area",
        isNew: false,
        statusImg: "./Wifi Disabled.svg",
        background: '#AEAEAE',
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        lastUsed: false,
        nextScheduled: false,
    },
    {
        id: "resolveCarbonMono",
        title: "Carbon Monoxide Detector",
        location: "SONOFF • Master Bedroom",
        isNew: false,
        statusImg: "./Wifi Disabled.svg",
        background: '#AEAEAE',
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        lastUsed: false,
        nextScheduled: false,
    }
];

function createDeviceCard(device) {
    const deviceCont = document.createElement("div");
    deviceCont.className = "deviceCont";
    deviceCont.style.background = device.background || "linear-gradient(129deg, rgba(255, 255, 255, 0.2) 1.17%, rgba(155, 155, 155, 0.2) 97.17%)";
    deviceCont.style.boxShadow = device.boxShadow || "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";


    const span85 = document.createElement("span");
    span85.id = "span85";
    span85.textContent = device.title;

    const span95 = document.createElement("span");
    span95.id = "span95";
    span95.textContent = device.location;

    const newDiv = document.createElement("div");
    newDiv.className = "newud";
    newDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <circle cx="6" cy="6" r="6" fill="#FF0606"/>
                        </svg><span>Live</span>`;
    if (!device.isNew) newDiv.style.display = "none";

    const statusCont = document.createElement("div");
    statusCont.className = "statusCont";

    const statusImg = document.createElement("img");
    statusImg.src = device.statusImg;
    statusImg.alt = "Camera Image";

    const dbottomCont = document.createElement("div");
    dbottomCont.className = "dbottomCont";
    dbottomCont.style.display = "none"; 

    statusCont.appendChild(statusImg);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "buttonContainer";

    const resolveButton = document.createElement("button");
    resolveButton.className = "resolveButton";
    resolveButton.innerHTML = `<img src="./resolve.svg" alt="Small Image"><span>Resolve</span>`;

    buttonContainer.appendChild(resolveButton); //here is my btn

    deviceCont.appendChild(span85);
    deviceCont.appendChild(span95);
    deviceCont.appendChild(newDiv);
    deviceCont.appendChild(statusCont);
    deviceCont.appendChild(dbottomCont); 
    deviceCont.appendChild(buttonContainer); 

    return deviceCont;
}

function displayDevice(deviceId) {
    const contentContainer = document.getElementById("contentContainer");
    contentContainer.innerHTML = "";

    const device = devices.find((d) => d.id === deviceId);
    if (device) {
        const deviceCard = createDeviceCard(device);
        contentContainer.appendChild(deviceCard);
    }
}

displayDevice("updateCameraDevice");
