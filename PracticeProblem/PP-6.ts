//? PP - 6 : Design a TypeScript function factorial that takes a number as input and returns its factorial.


function factorial(num: number): number {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// Sample Input:
console.log(factorial(5)); // Factorial of 5

// Sample Output:
// 120 (5!)