function generateSudoku4x4() {
  const SIZE = 4;
  const BOX_SIZE = 2;
  const grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

  function isValid(row, col, num) {
    for (let i = 0; i < SIZE; i++) {
      if (grid[row][i] === num || grid[i][col] === num) {
        return false;
      }
    }

    const boxRow = Math.floor(row / BOX_SIZE) * BOX_SIZE;
    const boxCol = Math.floor(col / BOX_SIZE) * BOX_SIZE;

    for (let r = 0; r < BOX_SIZE; r++) {
      for (let c = 0; c < BOX_SIZE; c++) {
        if (grid[boxRow + r][boxCol + c] === num) {
          return false;
        }
      }
    }

    return true;
  }

  function fillGrid(row = 0, col = 0) {
    if (row === SIZE) return true;
    const nextRow = col === SIZE - 1 ? row + 1 : row;
    const nextCol = col === SIZE - 1 ? 0 : col + 1;

    const nums = [1, 2, 3, 4].sort(() => Math.random() - 0.5); // shuffle
    for (const num of nums) {
      if (isValid(row, col, num)) {
        grid[row][col] = num;
        if (fillGrid(nextRow, nextCol)) {
          return true;
        }
        grid[row][col] = 0; // backtrack
      }
    }
    return false;
  }

  fillGrid();
  return grid;
}

// Mostrar resultado
const resultado = generateSudoku4x4();
resultado.forEach(row => console.log(row.join(", ")));
