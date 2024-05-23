const btn1 = document.getElementById("b1");
const btn2 = document.getElementById("b2");
const btn3 = document.getElementById("b3");
const btn4 = document.getElementById("b4");

btn1.addEventListener("click", function () {
  btn1.classList.add("selected");
  btn2.classList.remove("selected");
  btn3.classList.remove("selected");
  btn4.classList.remove("selected");
});

btn2.addEventListener("click", function () {
  btn1.classList.remove("selected");
  btn2.classList.add("selected");
  btn3.classList.remove("selected");
  btn4.classList.remove("selected");
});

btn3.addEventListener("click", function () {
  btn1.classList.remove("selected");
  btn2.classList.remove("selected");
  btn3.classList.add("selected");
  btn4.classList.remove("selected");
});

btn4.addEventListener("click", function () {
  btn1.classList.remove("selected");
  btn2.classList.remove("selected");
  btn3.classList.remove("selected");
  btn4.classList.add("selected");
});