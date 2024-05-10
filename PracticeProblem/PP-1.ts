//? pp:1 : Design a TypeScript function toTitleCase that takes a string as input and returns the string with the first letter of each word capitalized and the rest of the letters lowercase.

function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

// Sample Input:
console.log(toTitleCase("hello world"));
console.log(toTitleCase("hello world my name is SAMIN"));


// Sample Output:
// "Hello World"
