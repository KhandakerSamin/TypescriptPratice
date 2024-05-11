// Create a TypeScript function mergeObjects that takes two objects as input and returns a new object containing properties from both objects.

function mergeObjects(obj1: object, obj2: object): object {
    return { ...obj1, ...obj2 };
}

// Sample Input:
console.log(mergeObjects({ a: 1 }, { b: 2 })); // Merge objects

// Sample Output:
// { a: 1, b: 2 }
