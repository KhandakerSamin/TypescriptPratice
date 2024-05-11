//? Create a TypeScript function findCommonElements that takes two arrays as input and returns an array containing the common elements between them.

function findCommonElements(arr1: any[], arr2: any[]): any[] {
    return arr1.filter(item => arr2.includes(item));
}

// Sample Input:
console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // Common elements

// Sample Output:
// [3]
