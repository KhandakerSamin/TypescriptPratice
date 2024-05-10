//? PP-5 : Create a TypeScript function isPrime that takes a number as input and returns true if the number is a prime number, and false otherwise.

function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Sample Input:
console.log(isPrime(7)); // Prime number
console.log(isPrime(10)); // Non-prime number

// Sample Output:
// true
// false
