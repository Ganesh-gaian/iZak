const devices = [
    {
        id: "updateCameraDevice",
        title: "Camera",
        location: "TP Link • Outdoor Area",
        isNew: true,
        statusImg: "./camera-img.svg",
        background: "linear-gradient(128deg, #00478e -5.15%, #0b82f970, #c975fcb8 105.74%)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        lastUsed: {
            action: "Manual Trigger",
            time: "12:00 AM",
        },
        nextScheduled: false
    },
    {
        id: "updateCarbonMono",
        title: "Carbon Monoxide Detector",
        location: "SONOFF • Master Bedroom",
        isNew: true,
        statusImg: "./ppm.svg",
        background: "linear-gradient(128deg, #00478e -5.15%, #0b82f970, #c975fcb8 105.74%)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        lastUsed: {
            action: "Manual Trigger",
            time: "12:00 AM",
        },
        nextScheduled: false
    }

];

function createDeviceCard(device) {
    const deviceCont = document.createElement("div");
    deviceCont.className = "deviceCont";
    deviceCont.style.background = device.background;
    deviceCont.style.boxShadow = device.boxShadow;

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
    statusImg.alt = "";

    const dbottomCont = document.createElement("div");
    dbottomCont.className = "dbottomCont";

    const dbLetfCont = document.createElement("div");
    dbLetfCont.className = "dbLetfCont";

    const span129 = document.createElement("span");
    span129.id = "span129";
    span129.textContent = "Last used";

    const span139 = document.createElement("span");
    span139.id = "span139";
    span139.textContent = device.lastUsed.action;

    const span149 = document.createElement("span");
    span149.id = "span149";
    span149.textContent = device.lastUsed.time;

    dbLetfCont.appendChild(span129);
    dbLetfCont.appendChild(span139);
    dbLetfCont.appendChild(span149);

    dbottomCont.appendChild(dbLetfCont);

    if (device.nextScheduled) {
        const dbRightCont = document.createElement("div");
        dbRightCont.className = "dbRightCont";

        const span120 = document.createElement("span");
        span120.id = "span120";
        span120.textContent = "Next Scheduled for";

        const span130 = document.createElement("span");
        span130.id = "span130";
        span130.textContent = device.nextScheduled.action;

        const span140 = document.createElement("span");
        span140.id = "span140";
        span140.textContent = device.nextScheduled.time;

        dbRightCont.appendChild(span120);
        dbRightCont.appendChild(span130);
        dbRightCont.appendChild(span140);

        dbottomCont.appendChild(dbRightCont);
    }

    statusCont.appendChild(statusImg);

    deviceCont.appendChild(span85);
    deviceCont.appendChild(span95);
    deviceCont.appendChild(newDiv);
    deviceCont.appendChild(statusCont);
    deviceCont.appendChild(dbottomCont);

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

// Display the device with ID 'updateCameraDevice'
displayDevice("updateCameraDevice");
