// Write a TypeScript function armstrongNumbersInRange that takes a range of numbers (start and end) as input and returns an array containing all Armstrong numbers within that range.

function armstrongNumbersInRange(start: number, end: number): number[] {
    const armstrongNumbers: number[] = [];
    for (let i = start; i <= end; i++) {
        if (isArmstrongNumber(i)) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
}

// Helper function for Armstrong number check
function isArmstrongNumber(num: number): boolean {
    const digits = num.toString().split("").map(Number);
    const numDigits = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, numDigits), 0);
    return sum === num;
}

// Sample Input:
console.log(armstrongNumbersInRange(100, 1000)); // Armstrong numbers in range

// Sample Output:
// [153, 370, 371, 407]
