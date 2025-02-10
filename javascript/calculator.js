let currentDisplay = '';
document.querySelector('.display').value = currentDisplay;

function updateDisplay() {
    let display = document.querySelector('.display');
    display.value = currentDisplay;
    display.scrollLeft = 0; 
}


function appendValue(value) {
    currentDisplay += value;
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = '';
    updateDisplay();
}

function calculateResult() {
    try {
        currentDisplay = eval(currentDisplay).toString();
        updateDisplay();
    } catch (error) {
        document.querySelector('.display').value = 'Error';
        currentDisplay = '';
    }
}

function toggleSign() {
    if (currentDisplay !== '') {
        currentDisplay = (parseFloat(currentDisplay) * -1).toString();
        updateDisplay();
    }
}

function calculatePercentage() {
    if (currentDisplay !== "") {
        currentDisplay = (parseFloat(currentDisplay) / 100).toString();
        updateDisplay();
    }
}

function calculateSquareRoot() {
    if (currentDisplay !== "" && parseFloat(currentDisplay) >= 0) {
        currentDisplay = Math.sqrt(parseFloat(currentDisplay)).toString();
        updateDisplay();
    } else {
        document.querySelector('.display').value = "Error";
        currentDisplay = "";
    }
}

function backspace() {
    currentDisplay = currentDisplay.slice(0, -1);
    updateDisplay();
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}
