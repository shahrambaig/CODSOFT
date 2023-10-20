let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    currentInput += char;
    display.value = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}
