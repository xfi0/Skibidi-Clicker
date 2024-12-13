//variables
let money = 0;
let up1lvl = 0;
let up2lvl = 0;
let up3lvl = 0;
let up1price = 50;
let up2price = 150;
let up3price = 1000;
const skibidis = document.getElementById("cash");
const Up1LvlText = document.getElementById("up1");
const Up2LvlText = document.getElementById("up2");
const Up3LvlText = document.getElementById("up3");
const skibidiCountElement = document.getElementById("skibidi-count");

// Retrieve saved values from local storage
const savedMoney = parseInt(localStorage.getItem("savemoney")) || 0;
const savedUp1lvl = parseInt(localStorage.getItem("saveup1lvl")) || 0;
const savedUp2lvl = parseInt(localStorage.getItem("saveup2lvl")) || 0;
const savedUp3lvl = parseInt(localStorage.getItem("saveup3lvl")) || 0;
// Initialize current values with saved values
money += savedMoney;
up1lvl += savedUp1lvl;
up2lvl += savedUp2lvl;
up3lvl += savedUp3lvl;
up1price = 50 * up1lvl * 1.7;

document.addEventListener("DOMContentLoaded", function () {
  if (up2lvl >= 1) {
    up2wait();
  }

  if (up3lvl >= 1) {
    up3wait();
  }

  updateDisplay();
  console.log("Upgrade 1 price:", up1price);
  console.log("Loaded money:", money);
  console.log("Loaded up1lvl:", up1lvl);
  console.log("Loaded up2lvl:", up2lvl);
  console.log("Loaded up3lvl:", up3lvl);
});

function skibidiclicked() {
  money += up1lvl + 1;
  updateDisplay();
  saveToLocalStorage();
}

function up1() {
  if (money >= up1price) {
    money -= up1price;
    up1lvl += 1;
    up1price = 50 * up1lvl * 1.7; // Recalculate the price based on the new level
    updateDisplay();
    saveToLocalStorage();
  }
}

function up2() {
  if (money >= 150) {
    money -= 150;
    up2lvl += 5;
    updateDisplay();
    saveToLocalStorage();
    up2wait();
  }
}

// Helper function to update the display
function updateDisplay() {
  skibidiCountElement.innerText = up1price;
  skibidis.innerText = money + " Skibidi's";
  Up1LvlText.innerText = up1lvl;
  Up2LvlText.innerText = up2lvl / 5;
  Up3LvlText.innerText = up3lvl / 50;
}

// Helper function to save all relevant values to local storage
function saveToLocalStorage() {
  localStorage.setItem("savemoney", money);
  localStorage.setItem("saveup1lvl", up1lvl);
  localStorage.setItem("saveup2lvl", up2lvl);
  localStorage.setItem("saveup3lvl", up3lvl);
}

function up2wait() {
  setTimeout(() => {
    money += up2lvl;
    updateDisplay();
    saveToLocalStorage();
    console.log("Money increased by", up2lvl, "after 1 second");
    up2wait(); // Call the function again to repeat the process
  }, 1000); // 1000 milliseconds = 1 second
}

function restart() {
  let check = prompt("Type in RESET to reset progress");
  switch (check) {
    case "RESET":
      localStorage.setItem("savemoney", money - money);
      localStorage.setItem("saveup1lvl", 0);
      localStorage.setItem("saveup2lvl", 0);
      location.reload();
      break;
    default:
      alert("Wrong Password");
  }
}
function up3() {
  if (money >= up3lvl) {
    money -= up3price;
    up3lvl += 50;
    updateDisplay();
    saveToLocalStorage();
    up3wait();
  }
}
function up3wait() {
  setTimeout(() => {
    money += up3lvl;
    updateDisplay();
    saveToLocalStorage();
    console.log("Factory Made", up3lvl, "after 1 second");
    up3wait(); // Call the function again to repeat the process
  }, 1000); // 1000 milliseconds = 1 second
}
