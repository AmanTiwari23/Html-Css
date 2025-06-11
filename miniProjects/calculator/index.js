let display = document.getElementById("display");
let currentInput = "0";
let operator = null;
let previousInput = null;
let waitingForNewNumber = false;

function updateDisplay() {
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  operator = null;
  previousInput = null;
  waitingForNewNumber = false;
  updateDisplay();
}

function deleteLast() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}

function appendToDisplay(value) {
  if (waitingForNewNumber) {
    currentInput = "";
    waitingForNewNumber = false;
  }

  if (value === ".") {
    if (currentInput.includes(".")) return;
    if (currentInput === "") currentInput = "0";
  }

  if (["+", "-", "*", "/"].includes(value)) {
    if (operator !== null && !waitingForNewNumber) {
      calculateResult();
    }
    operator = value;
    previousInput = currentInput;
    waitingForNewNumber = true;
    return;
  }

  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }

  updateDisplay();
}

function calculateResult() {
  if (operator === null || previousInput === null || waitingForNewNumber) {
    return;
  }

  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero!");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = null;
  waitingForNewNumber = true;
  updateDisplay();
}


document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key >= "0" && key <= "9") {
    appendToDisplay(key);
  } else if (key === ".") {
    appendToDisplay(".");
  } else if (["+", "-", "*", "/"].includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculateResult();
  } else if (key === "Escape" || key === "c" || key === "C") {
    clearDisplay();
  } else if (key === "Backspace") {
    event.preventDefault();
    deleteLast();
  }
});
