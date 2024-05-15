var deviceTypeData = [
  {
    name: "Entertainment",
    img: "/images/devices/speaker2.png",
  },
  {
    name: "Home Energy Monitor",
    img: "/images/devices/hem.svg",
  },
  {
    name: "Ambience",
    img: "/images/devices/tableLamp1.png",
  },
  {
    name: "Utility",
    img: "/images/devices/utility.svg",
  },
  {
    name: "Bath",
    img: "/images/devices/bath.svg",
  },
  {
    name: "Solar Powered",
    img: "/images/devices/solarpow.svg",
  },
  {
    name: "Security Devices",
    img: "/images/devices/secdev.svg",
  },
  {
    name: "Hazard",
    img: "/images/devices/hazard.svg",
  },
];

var manufacturerTypeData = [
  {
    name: "Samsung",
  },
  {
    name: "LG",
  },
  {
    name: "SONOS",
  },
  {
    name: "IKEA",
  },
  {
    name: "Honeywell",
  },
  {
    name: "Seimens",
  },
  {
    name: "Amazon",
  },
  {
    name: "TP-Link",
  },
  {
    name: "Arlo",
  },
];

function generateUnitHTML(unit) {
  var html = '<div class="unitCont">';
  if (unit.img) {
    html += '<img src="' + unit.img + '" alt="" />';
  }
  html += '<span id="span5">' + unit.name + "</span>";
  html += "</div>";
  return html;
}

function renderUnits(units) {
  var container = document.querySelector(".devicesnmanContainer");
  container.innerHTML = units.map(generateUnitHTML).join("");
}

renderUnits(deviceTypeData);

document.getElementById("span3").addEventListener("click", function () {
  renderUnits(deviceTypeData);
});

document.getElementById("span4").addEventListener("click", function () {
  renderUnits(manufacturerTypeData);
});

document.getElementById("span3").addEventListener("click", function () {
  this.classList.add("underline");
  document.getElementById("span4").classList.remove("underline");
  renderUnits(deviceTypeData);
});

document.getElementById("span4").addEventListener("click", function () {
  this.classList.add("underline");
  document.getElementById("span3").classList.remove("underline");
  renderUnits(manufacturerTypeData);
});

document.querySelector(".on").addEventListener("click", function () {
  this.classList.add("active");
  document.querySelector(".off").classList.remove("active");
});

document.querySelector(".off").addEventListener("click", function () {
  this.classList.add("active");
  document.querySelector(".on").classList.remove("active");
});

document.querySelector(".gridIconContainer").classList.add("activeGridList");

document
  .querySelector(".gridIconContainer")
  .addEventListener("click", function () {
    this.classList.add("activeGridList");
    document
      .querySelector(".listIconContainer")
      .classList.remove("activeGridList");
  });

document
  .querySelector(".listIconContainer")
  .addEventListener("click", function () {
    this.classList.add("activeGridList");
    document
      .querySelector(".gridIconContainer")
      .classList.remove("activeGridList");
  });

document.querySelector(".imgCont1").addEventListener("click", function () {
  this.classList.add("activeGridList");
  document.querySelector(".imgCont2").classList.remove("activeGridList");
  document.querySelector(".imgCont3").classList.remove("activeGridList");
});

document.querySelector(".imgCont2").addEventListener("click", function () {
  this.classList.add("activeGridList");
  document.querySelector(".imgCont1").classList.remove("activeGridList");
  document.querySelector(".imgCont3").classList.remove("activeGridList");
});

document.querySelector(".imgCont3").addEventListener("click", function () {
  this.classList.add("activeGridList");
  document.querySelector(".imgCont1").classList.remove("activeGridList");
  document.querySelector(".imgCont2").classList.remove("activeGridList");
});

document.addEventListener("DOMContentLoaded", function () {
  var defaultScreen = document.getElementById("defaultScreen");
  var filterScreen = document.getElementById("filterScreen");
  var listDevicesScreen = document.getElementById("listDevicesScreen");
  var newDeviceScreen = document.getElementById("newDevice");
  var devicesHeader = document.querySelector(".devicesHeader");
  var popupmodel = document.getElementById("popup");
  var updatingDevice = document.getElementById("updatingDevice");

  function showupdatingDevice() {
    defaultScreen.style.display = "none";
    filterScreen.style.display = "none";
    listDevicesScreen.style.display = "none";
    newDeviceScreen.style.display = "none";
    devicesHeader.style.display = "flex";
    updatingDevice.style.display = "flex";
    document.querySelector(".imgCont3").classList.remove("activeGridList");
  }

  function showPopup() {
    console.log("Pop up displayed");
    popupmodel.style.display = "flex";
    newDeviceScreen.style.filter = "blur(8px)";
  }

  function showDefaultScreen() {
    defaultScreen.style.display = "flex";
    filterScreen.style.display = "none";
    listDevicesScreen.style.display = "none";
    newDeviceScreen.style.display = "none";
    devicesHeader.style.display = "flex";
    updatingDevice.style.display = "none";
    document.querySelector(".imgCont1").classList.remove("activeGridList");
    document.querySelector(".imgCont2").classList.remove("activeGridList");
    document.querySelector(".imgCont3").classList.remove("activeGridList");
    document.querySelector(".listIconContainer").classList.remove("activeGridList");
  }

  function showFilterScreen() {
    defaultScreen.style.display = "none";
    filterScreen.style.display = "flex";
    listDevicesScreen.style.display = "none";
    newDeviceScreen.style.display = "none";
    devicesHeader.style.display = "flex";
    updatingDevice.style.display = "none";
    console.log("filter display");
    document.querySelector(".imgCont3").classList.remove("activeGridList");
  }

  function showListDevicesScreen() {
    defaultScreen.style.display = "none";
    filterScreen.style.display = "none";
    listDevicesScreen.style.display = "flex";
    newDeviceScreen.style.display = "none";
    devicesHeader.style.display = "flex";
    updatingDevice.style.display = "none";
    document.querySelector(".imgCont3").classList.remove("activeGridList");
  }

  function showNewDeviceScreen() {
    defaultScreen.style.display = "none";
    filterScreen.style.display = "none";
    listDevicesScreen.style.display = "none";
    newDeviceScreen.style.display = "flex";
    devicesHeader.style.display = "none";
    updatingDevice.style.display = "none";
    document.querySelector(".imgCont3").classList.remove("activeGridList");
  }

  showDefaultScreen();

  document.getElementById("updateDevicebtn").addEventListener("click", function() {
    showupdatingDevice();
  })

  document.getElementById("versionbtn").addEventListener("click", function() {
    showPopup();
  })

  document.getElementById("backnd").addEventListener("click", function() {
    showDefaultScreen();
  })

  document.querySelector(".gridIconContainer").addEventListener("click", function () {
    showFilterScreen();
  });

  document.querySelector(".listIconContainer").addEventListener("click", function () {
    showListDevicesScreen();
  });

  document.querySelector(".imgCont1").addEventListener("click", function () {
    showNewDeviceScreen();
  });


  document.querySelectorAll(".imgCont").forEach(function (element) {
    element.addEventListener("click", function () {
      devicesHeader.style.display = "block";
    });
  });

  document.querySelector(".imgCont3").addEventListener("click", function () {
    devicesHeader.style.display = "flex";
    showFilterScreen();
    console.log("hiiiiiiiiiiii");
  });
});
