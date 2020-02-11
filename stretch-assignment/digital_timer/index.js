const msTens = document.querySelector("#msTens");
const msHundreds = document.querySelector("#msHundreds");
const secondOnes = document.querySelector("#secondOnes");
const secondTens = document.querySelector("#secondTens");

const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

let msTenths = 0;
let msOnes = 0;
let tenths = 0;
let ones = 0;

startButton.addEventListener("click", () => {
  setInterval(() => {
    msTens.textContent = msTenths;
    msHundreds.textContent = msOnes;
    secondOnes.textContent = tenths;
    secondTens.textContent = ones;
    if (msTenths === 9) {
      msTenths = 0;
      msOnes++;
    } else {
      msTenths++;
    }

    if (msOnes === 9) {
      msOnes = 0;
      tenths++;
    }

    if (tenths === 9) {
      tenths = 0;
      ones++;
    }
  }, 10);
});