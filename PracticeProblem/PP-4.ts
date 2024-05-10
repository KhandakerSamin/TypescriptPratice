//? PP-4 : Create a TypeScript function mergeArrays that takes two arrays of any type as input and returns a new array containing all elements from both arrays.

function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2];
}

// Sample Input:
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// Sample Output:
// [1, 2, 3, 4, 5, 6]
