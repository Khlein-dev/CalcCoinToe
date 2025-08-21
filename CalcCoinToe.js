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

// CALCULATOR

function appendToDisplay(value) {
    const display = document.querySelector('.CalcContainer input[type="text"]');
    display.value += value;
}
function clearDisplay() {
    const display = document.querySelector('.CalcContainer input[type="text"]');
    display.value = '';
}
function calculateResult() {
    const display = document.querySelector('.CalcContainer input[type="text"]');
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}


function deleteLast() {
    let display = document.getElementById('display'); // Change 'display' to your actual input/display element's ID
    display.value = display.value.slice(0, -1);
}


// CONVERTER

function dollars() {
    const display = document.getElementById('usd');
    
}


