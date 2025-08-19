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