//? Write a TypeScript function removeWhitespace that takes a string as input and returns a new string with all whitespace characters removed.

function removeWhitespace(str: string): string {
    return str.replace(/\s/g, "");
}

// Sample Input:
console.log(removeWhitespace("hello world")); // String with whitespace

// Sample Output:
// "helloworld"
