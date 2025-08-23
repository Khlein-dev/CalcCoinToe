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

const rates = {
    USD: 1,
    PHP: 56,
    JPY: 150,
    EUR: 0.92,
    GBP: 0.78,
    KRW: 1330
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Please enter a valid amount!";
        return;
    }

    const converted = (amount / rates[from]) * rates[to];
    resultDiv.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}

// Tic Tac Toe

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
const statusMessage = document.getElementById("statusMessage");

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        if (checkWinner()) {
            statusMessage.innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== "")) {
            statusMessage.innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            statusMessage.innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusMessage.innerText = `Player ${currentPlayer}'s turn`;
    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerText = "";
    }
}






