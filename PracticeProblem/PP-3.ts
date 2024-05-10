//? PP-3 : Design a TypeScript function isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

function isPalindrome(str: string): boolean {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

// Sample Input:
console.log(isPalindrome("racecar"));

// Sample Output:
// true
