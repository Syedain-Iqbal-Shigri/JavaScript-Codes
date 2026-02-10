// get display box
let display = document.getElementById("display");

// add number or operator to screen
function addValue(value) {
  display.value = display.value + value;
}

// clear everything
function clearDisplay() {
  display.value = "";
}

// delete last number
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// calculate answer
function showResult() {
  try {
    let answer = eval(display.value);
    display.value = answer;
  } catch {
    display.value = "Error";
  }
}
