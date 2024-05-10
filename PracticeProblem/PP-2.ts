//? PP-2 : Create a TypeScript function sumOfSquares that takes an array of numbers as input and returns the sum of the squares of those numbers.

function sumOfSquares(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num ** 2, 0);
}

// Sample Input:
console.log(sumOfSquares([1, 2, 3, 4]));

// Sample Output:
// 30 (1^2 + 2^2 + 3^2 + 4^2)
