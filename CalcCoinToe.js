function cal() {
    document.querySelector(`body`).classList.add(`showCal`)
    const calculator = document.querySelector('.calculate');
    calculator.style.display = 'block';

}

function con() {
    document.querySelector(`body`).classList.add(`showCon`)
    const convert = document.querySelector('.convert');
    convert.style.display = 'block';
}

function tik() {
    document.querySelector(`body`).classList.add(`showTik`)
    const tictac = document.querySelector('.tictac');
    tictac.style.display = 'block';
}

const calculator = document.querySelector('.calculate');
const convert = document.querySelector('.convert');
const tictac = document.querySelector('.tictac');
const exitBtn = document.querySelector('.exitCalc');
const exitConBtn = document.querySelector('.exitCon');
const exitTicBtn = document.querySelector('.exitTic');


exitBtn.addEventListener('click', () => {
    calculator.style.display = 'none';
});

exitConBtn.addEventListener('click', () => {
    convert.style.display = 'none';
});

exitTicBtn.addEventListener('click', () => {
    tictac.style.display = 'none';
}); 

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0' && value !== '.') {
        display.value = value;
    }   
    else {
        display.value += value;
    }               
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}
function calculateResult() {
    const display = document.getElementById('display');         
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }   
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    display.value = '0'; // Initialize display
}); 

// This function is used to handle the display of the calculator
function handleButtonClick(event) {
    const button = event.target;
    const display = document.getElementById('display');     
    if (button.classList.contains('numbers')) {
        appendToDisplay(button.textContent);    
    } else if (button.classList.contains('operators')) {
        appendToDisplay(button.textContent);
    }       
    else if (button.classList.contains('equals')) {
        calculateResult();
    }       
    else if (button.classList.contains('clear')) {          
        clearDisplay(); 
    }   
    else if (button.classList.contains('exit')) {       
        const calculator = document.querySelector('.calculate');    
        calculator.style.display = 'none'; // Hide the calculator
    }
}


