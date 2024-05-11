//? Write a TypeScript function rotateArray that takes an array and a number k as input and rotates the array to the right by k steps.

function rotateArray(arr: any[], k: number): any[] {
    const n = arr.length;
    const rotations = k % n;
    return arr.slice(n - rotations).concat(arr.slice(0, n - rotations));
}

// Sample Input:
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Rotate array by 2 steps

// Sample Output:
// [4, 5, 1, 2, 3]

