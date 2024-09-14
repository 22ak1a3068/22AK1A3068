// Function to interchange the first and last columns of a matrix
function interchangeColumns(matrix) {
    if (matrix.length === 0) return matrix;
    
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Check if the matrix has at least 2 columns
    if (numCols < 2) {
        console.log("Matrix does not have enough columns to interchange.");
        return matrix;
    }

    for (let i = 0; i < numRows; i++) {
        // Swap the first and last elements of the current row
        const temp = matrix[i][0];
        matrix[i][0] = matrix[i][numCols - 1];
        matrix[i][numCols - 1] = temp;
    }

    return matrix;
}

// Example usage
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log("Original Matrix:");
console.log(matrix);

const newMatrix = interchangeColumns(matrix);

console.log("Matrix after interchanging first and last columns:");
console.log(newMatrix);
