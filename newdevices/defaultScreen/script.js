document.querySelector(".gridIconContainer").classList.add("activeGridList");

document
  .querySelector(".gridIconContainer")
  .addEventListener("click", function () {
    console.log("grid clicked");
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
