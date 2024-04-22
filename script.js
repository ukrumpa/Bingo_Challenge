const words = ['apple', 'banana', 'cat', 'dog', 'elephant', 'frog', 'giraffe', 'horse', 'ice cream', 'jacket', 'kite', 'lion', 'monkey', 'nest', 'octopus', 'penguin', 'queen', 'rabbit', 'snake', 'tiger', 'umbrella', 'violin', 'whale', 'xylophone', 'yak', 'zebra'];

const bingoGrid = document.getElementById('bingoGrid');
const startButton = document.getElementById('startGame');

let selectedWord = '';
let bingoWords = [];

function generateGrid() {
    bingoWords = shuffleArray(words).slice(0, 6);
    bingoGrid.innerHTML = '';
    for (let i = 0; i < bingoWords.length; i++) {
        const cell = document.createElement('div');
        cell.textContent = bingoWords[i];
        bingoGrid.appendChild(cell);
    }
}

function startGame() {
    generateGrid();
    selectedWord = bingoWords[Math.floor(Math.random() * bingoWords.length)];
    alert('The selected word is: ' + selectedWord);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

startButton.addEventListener('click', startGame);
