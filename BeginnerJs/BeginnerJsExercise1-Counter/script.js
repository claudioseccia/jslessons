let counterValue = document.querySelector(".counter__value");
let counterTitle = document.querySelector(".counter__title");
const incrementButton = document.querySelector(".counter__button--increase");
const decrementButton = document.querySelector(".counter__button--decrease");
const resetButton = document.querySelector(".counter__reset-button");

function incrementValue() {
  +counterValue.textContent++;
}
function decrementValue() {
  console.log("counterValue.innerHTML", typeof +counterValue.textContent);
  +counterValue.textContent--;
}
function resetValue() {
  counterValue.textContent = 0;
  counterValue.style.color = "#1d2507";
  counterTitle.innerHTML = "Fancy Counter";
  incrementButton.disabled = false;
  decrementButton.disabled = false;
}

function changeValueColor() {
  if (parseInt(counterValue.innerHTML) > 5) {
    counterValue.style.color = "rgba(255, 0, 0, 0.82)";
    counterTitle.innerHTML = "Limit! Buy Pro for > 5";
    incrementButton.disabled = true;
    decrementButton.disabled = true;
  } else if (parseInt(counterValue.innerHTML) > 0) {
    counterValue.style.color = "rgba(0, 68, 9, 1)";
  } else if (parseInt(counterValue.innerHTML) < 0) {
    counterValue.style.color = "rgba(0, 76, 255, 0.82)";
    decrementButton.disabled = true;
  } else {
    counterValue.style.color = "#1d2507";
    decrementButton.disabled = false;
  }
}

incrementButton.addEventListener("click", () => {
  incrementValue();
  changeValueColor();
});

decrementButton.addEventListener("click", () => {
  decrementValue();
  changeValueColor();
});

resetButton.addEventListener("click", () => {
  resetValue();
});
