const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    // Note: eval() works for simple demos, though custom parsing is safer for production
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
