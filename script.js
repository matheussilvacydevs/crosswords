// script.js
const crosswordData = [
  ['H', 'E', 'L', 'L', 'O'],
  [' ', ' ', 'A', ' ', ' '],
  [' ', ' ', 'T', ' ', ' '],
  [' ', ' ', 'E', ' ', ' '],
  [' ', ' ', 'M', ' ', ' ']
];

function createCrossword() {
  const crosswordContainer = document.getElementById('crossword');

  for (let i = 0; i < crosswordData.length; i++) {
    for (let j = 0; j < crosswordData[i].length; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = crosswordData[i][j];

      if (crosswordData[i][j] !== ' ') {
        cell.classList.add('word-across');
      }

      crosswordContainer.appendChild(cell);
    }
  }
}

createCrossword();
