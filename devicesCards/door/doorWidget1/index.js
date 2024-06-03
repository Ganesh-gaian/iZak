// const favBtn = document.getElementById("fav");
// const infoBtn = document.getElementById("info");
// const recycleBtn = document.getElementById("recycle");

// favBtn.addEventListener("click", () => {
//   favBtn.classList.toggle("colored");
// });
// infoBtn.addEventListener("click", () => {
//   infoBtn.classList.toggle("colored");
// });
// recycleBtn.addEventListener("click", () => {
//   recycleBtn.classList.toggle("colored");
// });

// //logics for buttons  under imprintBtn  for bg color
// document.getElementById("prachiFingerprint").addEventListener("click", function() {
//   resetSelection();
//   this.classList.add("selected");
// });

// document.getElementById("cherryFingerprint").addEventListener("click", function() {
//   resetSelection();
//   this.classList.add("selected");
// });

// document.getElementById("yanaFingerprint").addEventListener("click", function() {
//   resetSelection();
//   this.classList.add("selected");
// });

// document.getElementById("moonFingerprint").addEventListener("click", function() {
//   resetSelection();
//   this.classList.add("selected");
// });

// function resetSelection() {
//   document.getElementById("prachiFingerprint").classList.remove("selected");
//   document.getElementById("cherryFingerprint").classList.remove("selected");
//   document.getElementById("yanaFingerprint").classList.remove("selected");
//   document.getElementById("moonFingerprint").classList.remove("selected");
// }

// //logics for buttons  under faceIdContent  for bg color
// document.getElementById("prachifaceIdContent").addEventListener("click", function() {
//   resetSelectionFaceId();
//   this.classList.add("selected");
// });

// document.getElementById("cherryfaceIdContent").addEventListener("click", function() {
//   resetSelectionFaceId();
//   this.classList.add("selected");
// });

// document.getElementById("yanafaceIdContent").addEventListener("click", function() {
//   resetSelectionFaceId();
//   this.classList.add("selected");
// });

// document.getElementById("moonfaceIdContent").addEventListener("click", function() {
//   resetSelectionFaceId();
//   this.classList.add("selected");
// });

// function resetSelectionFaceId() {
//   document.getElementById("prachifaceIdContent").classList.remove("selected");
//   document.getElementById("cherryfaceIdContent").classList.remove("selected");
//   document.getElementById("yanafaceIdContent").classList.remove("selected");
//   document.getElementById("moonfaceIdContent").classList.remove("selected");
// }

// //two logics here: display another divs based on ids and add bg color to btmtop content btns :
// const imprintBtn = document.getElementById("imprintBtn");
// const faceIdBtn = document.getElementById("faceIdBtn");
// const codeBtn = document.getElementById("codeBtn");
// const guestBtn = document.getElementById("guestBtn");

// const imprintContent = document.getElementById("imprintContent");
// const faceIdContent = document.getElementById("faceIdContent");
// const GuestIdContent = document.getElementById("GuestIdContent");

// // Add other content divs if needed

// function removeColoredClass() {
//   imprintBtn.classList.remove("colored");
//   faceIdBtn.classList.remove("colored");
//   codeBtn.classList.remove("colored");
//   guestBtn.classList.remove("colored");
// }

// function hideAllContents() {
//   imprintContent.style.display = "none";
//   faceIdContent.style.display = "none";
//   GuestIdContent.style.display = "none";
//   passCodeContent.style.display = "none";
// }

// imprintBtn.addEventListener("click", () => {
//   removeColoredClass();
//   hideAllContents();
//   imprintBtn.classList.add("colored");
//   imprintContent.style.display = "block";
// });

// faceIdBtn.addEventListener("click", () => {
//   removeColoredClass();
//   hideAllContents();
//   faceIdBtn.classList.add("colored");
//   faceIdContent.style.display = "block";
// });

// codeBtn.addEventListener("click", () => {
//   removeColoredClass();
//   hideAllContents();
//   codeBtn.classList.add("colored");
//   // codeBtn.style.display = "block";
// });

// guestBtn.addEventListener("click", () => {
//   removeColoredClass();
//   hideAllContents();
//   guestBtn.classList.add("colored");
//   GuestIdContent.style.display = "block";
// });

// //------------------
// const passCodeContent = document.getElementById("passCodeContent");
// const passcodeInput = document.getElementById("passcodeInput");

// codeBtn.addEventListener("click", () => {
//   removeColoredClass();
//   hideAllContents();
//   codeBtn.classList.add("colored");
//   passCodeContent.style.display = "flex";
// });

// document.querySelectorAll("button[id^='key']").forEach(key => {
//   key.addEventListener("click", () => {
//     if (key.id === "keyDelete") {
//       passcodeInput.value = passcodeInput.value.slice(0, -1);
//     } else if (key.id === "keyEnter") {
//       alert("Passcode entered: " + passcodeInput.value);
//       passcodeInput.value = "";
//     } else {
//       passcodeInput.value += key.textContent;
//     }
//   });
// });

const favBtn = document.getElementById("fav");
const infoBtn = document.getElementById("info");
const recycleBtn = document.getElementById("recycle");

favBtn.addEventListener("click", () => {
  favBtn.classList.toggle("colored");
});
infoBtn.addEventListener("click", () => {
  infoBtn.classList.toggle("colored");
});
recycleBtn.addEventListener("click", () => {
  recycleBtn.classList.toggle("colored");
});

// Logics for buttons under imprintBtn for bg color
document
  .getElementById("prachiFingerprint")
  .addEventListener("click", function () {
    resetSelection();
    this.classList.add("selected");
  });

document
  .getElementById("cherryFingerprint")
  .addEventListener("click", function () {
    resetSelection();
    this.classList.add("selected");
  });

document
  .getElementById("yanaFingerprint")
  .addEventListener("click", function () {
    resetSelection();
    this.classList.add("selected");
  });

document
  .getElementById("moonFingerprint")
  .addEventListener("click", function () {
    resetSelection();
    this.classList.add("selected");
  });

function resetSelection() {
  document.getElementById("prachiFingerprint").classList.remove("selected");
  document.getElementById("cherryFingerprint").classList.remove("selected");
  document.getElementById("yanaFingerprint").classList.remove("selected");
  document.getElementById("moonFingerprint").classList.remove("selected");
}

// Logics for buttons under faceIdContent for bg color
document
  .getElementById("prachifaceIdContent")
  .addEventListener("click", function () {
    resetSelectionFaceId();
    this.classList.add("selected");
  });

document
  .getElementById("cherryfaceIdContent")
  .addEventListener("click", function () {
    resetSelectionFaceId();
    this.classList.add("selected");
  });

document
  .getElementById("yanafaceIdContent")
  .addEventListener("click", function () {
    resetSelectionFaceId();
    this.classList.add("selected");
  });

document
  .getElementById("moonfaceIdContent")
  .addEventListener("click", function () {
    resetSelectionFaceId();
    this.classList.add("selected");
  });

function resetSelectionFaceId() {
  document.getElementById("prachifaceIdContent").classList.remove("selected");
  document.getElementById("cherryfaceIdContent").classList.remove("selected");
  document.getElementById("yanafaceIdContent").classList.remove("selected");
  document.getElementById("moonfaceIdContent").classList.remove("selected");
}

// Two logics here: display other divs based on ids and add bg color to btmtop content btns
const imprintBtn = document.getElementById("imprintBtn");
const faceIdBtn = document.getElementById("faceIdBtn");
const codeBtn = document.getElementById("codeBtn");
const guestBtn = document.getElementById("guestBtn");

const imprintContent = document.getElementById("imprintContent");
const faceIdContent = document.getElementById("faceIdContent");
const GuestIdContent = document.getElementById("GuestIdContent");
const passCodeContent = document.getElementById("passCodeContent");

function removeColoredClass() {
  imprintBtn.classList.remove("colored");
  faceIdBtn.classList.remove("colored");
  codeBtn.classList.remove("colored");
  guestBtn.classList.remove("colored");
}

function hideAllContents() {
  imprintContent.style.display = "none";
  faceIdContent.style.display = "none";
  GuestIdContent.style.display = "none";
  passCodeContent.style.display = "none";
}

imprintBtn.addEventListener("click", () => {
  removeColoredClass();
  hideAllContents();
  imprintBtn.classList.add("colored");
  imprintContent.style.display = "block";
});

faceIdBtn.addEventListener("click", () => {
  removeColoredClass();
  hideAllContents();
  faceIdBtn.classList.add("colored");
  faceIdContent.style.display = "block";
});

codeBtn.addEventListener("click", () => {
  removeColoredClass();
  hideAllContents();
  codeBtn.classList.add("colored");
  passCodeContent.style.display = "flex";
});

guestBtn.addEventListener("click", () => {
  removeColoredClass();
  hideAllContents();
  guestBtn.classList.add("colored");
  GuestIdContent.style.display = "block";
});

// Show the keypad when the passcode input is focused
passcodeInput.addEventListener("focus", () => {
  document.getElementById("keypad").style.display = "grid";
});

// Add functionality to keypad buttons
document.querySelectorAll("button[id^='key']").forEach((key) => {
  key.addEventListener("click", () => {
    if (key.id === "keyDelete") {
      passcodeInput.value = passcodeInput.value.slice(0, -1);
    } else if (key.id === "keyEnter") {
      alert("Passcode entered: " + passcodeInput.value);
      passcodeInput.value = "";
    } else {
      passcodeInput.value += key.textContent;
    }
  });
});
