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