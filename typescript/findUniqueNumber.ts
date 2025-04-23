// 6 kyu
// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

export function findUniq(arr: number[]): number {
    const [a, b, c] = arr;

    const common = (a === b || a === c) ? a : b;

    for (const num of arr) {
        if (num !== common) return num;
    }

    return -1;
}



console.log(findUniq([ 1, 2, 1, 1, 1, 1 ]), 2);
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55);