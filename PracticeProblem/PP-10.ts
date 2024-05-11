//? Create a TypeScript function removeDuplicates that takes an array as input and returns a new array with duplicate elements removed, preserving the original order.

function removeDuplicates(arr: any[]): any[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Sample Input:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Array with duplicates

// Sample Output:
// [1, 2, 3, 4, 5]
