function sudoku4x4() {
  const grid = [
    [1, 2, 3, 4],
    [3, 4, 1, 2],
    [2, 1, 4, 3],
    [4, 3, 2, 1]
  ];

  return grid;
}

// Mostrar o resultado formatado
const resultado = sudoku4x4();
resultado.forEach(row => console.log(row.join(", ")));
