const devices = [
  {
    id: "updateCarbonDevice1",
    title: "Carbon Monoxide Detector",
    location: "SONOFF • Master Bedroom",
    isNew: true,
    statusImg: "https://izak.aidtaas.com/svg/curtain.svg",
    configureImg: "https://izak.aidtaas.com/svg/configure.svg",
    // background: "linear-gradient(128deg, rgba(255, 255, 255, 0.10) -5.15%, rgba(22, 93, 196, 0.10) 47.41%, rgba(96, 121, 255, 0.10) 105.74%, rgba(12, 56, 120, 0.10) 105.74%)",
    background: "#6a6969",

    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  {
    id: "updateCameraDevice2",
    title: "Camera",
    location: "TP Link • Outdoor Area",
    isNew: true,
    statusImg: "./ppm.svg",
    configureImg: "https://izak.aidtaas.com/svg/configure.svg",
    // background:
    //   "linear-gradient(128deg, #00478e -5.15%, #0b82f970, #c975fcb8 105.74%)",
        // background: "linear-gradient(128deg, rgba(255, 255, 255, 0.10) -5.15%, rgba(22, 93, 196, 0.10) 47.41%, rgba(96, 121, 255, 0.10) 105.74%, rgba(12, 56, 120, 0.10) 105.74%)",

    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    background: "#6a6969",

  },
  // Add more devices as needed
];

function createDeviceCard(device) {
  const deviceCont = document.createElement("div");
  deviceCont.className = "deviceCont";
  deviceCont.style.background = device.background;
  deviceCont.style.boxShadow = device.boxShadow;

  const span8 = document.createElement("span");
  span8.id = "span8ud";
  span8.textContent = device.title;

  const span9 = document.createElement("span");
  span9.id = "span9ud";
  span9.textContent = device.location;

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

  const dbottomContndud = document.createElement("div");
  dbottomContndud.className = "dbottomContndud";

  const innerud = document.createElement("div");
  innerud.className = "innerud";

  // const configureImg = document.createElement('img');
  // configureImg.src = device.configureImg;
  // configureImg.alt = '';
  const configureDigit = document.createElement("span");
  configureDigit.textContent = "90%";

  const configureSpan = document.createElement("span");
  configureSpan.textContent = "Updating..";

  innerud.appendChild(configureSpan);
  // innerud.appendChild(configureImg);
  innerud.appendChild(configureDigit);

  dbottomContndud.appendChild(innerud);
  statusCont.appendChild(statusImg);

  deviceCont.appendChild(span8);
  deviceCont.appendChild(span9);
  deviceCont.appendChild(newDiv);
  deviceCont.appendChild(statusCont);
  deviceCont.appendChild(dbottomContndud);

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

// Example usage
displayDevice("updateCameraDevice2");
