const devices = [
  {
    id: "updateCameraDevice",
    title: "Camera",
    location: "TP Link • Outdoor Area",
    isNew: true,
    statusImg: "./camera-img.svg",
    configureImg: "https://izak.aidtaas.com/svg/configure.svg",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    background: "#5A616B",
  },
  {
    id: "updateCarbonDevice",
    title: "Carbon Monoxide Detector",
    location: "SONOFF • Master Bedroom",
    isNew: false,
    statusImg: "./ppm.svg",
    configureImg: "https://izak.aidtaas.com/svg/configure.svg",
    background: "#5A616B",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  {
    id: "updatevacuum",
    title: "Vacuum",
    location: "iRobot • Living Room",
    isNew: false,
    statusImg: "./wirelessvacuumCleaner.svg",
    configureImg: "https://izak.aidtaas.com/svg/configure.svg",
    background: "#5A616B",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  }
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

  if (device.id === "updateCarbonDevice" || device.id === "updatevacuum") {
    newDiv.style.visibility = "hidden";
  } else if (!device.isNew) {
    newDiv.style.display = "none";
  }

  const statusCont = document.createElement("div");
  statusCont.className = "statusCont";

  if (device.id === "updateCarbonDevice") {
    const statusText = document.createElement("span");
    statusText.className = "statusText";
    statusText.textContent = "574 ppm";
    statusCont.appendChild(statusText);
  }

  const statusImg = document.createElement("img");
  statusImg.src = device.statusImg;
  statusImg.alt = "";

  const dbottomContndud = document.createElement("div");
  dbottomContndud.className = "dbottomContndud";

  const innerud = document.createElement("div");
  innerud.className = "innerud";

  const configureDigit = document.createElement("span");
  configureDigit.textContent = "90%";

  const configureSpan = document.createElement("span");
  configureSpan.textContent = "Updating..";

  innerud.appendChild(configureSpan);
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

displayDevice("updatevacuum");
