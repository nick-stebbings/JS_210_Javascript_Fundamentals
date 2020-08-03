/*
P:



In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

Examples:

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]


E:

D:
  Input = 2d array
  Output = new 2d array

A:
   - SET a new array
   - ITERATE through the matrix, with two for loops
   - the inner loop will be row index,
   - the outer loop will be column index
   - go down each column and push the elements into an array
   - after each innter loop push the array onto the results array
   - return results array
*/

function transpose(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < matrix.length; j++) {
      newElement = matrix[j][i];
      newRow.push(newElement);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);


console.log(transpose([[1, 2, 3, 4]]));       // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));       // [[1, 2, 3, 4]]
console.log(transpose([[1]]));       // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
