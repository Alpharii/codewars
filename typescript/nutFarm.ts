// 6 kyu Nut Farm

// Story
// It's a pretty relaxing life here at the nut farm.

// Most of the time we just sit around looking at our nuts.

// But once a year comes harvesting time...

// Harvesting nuts is very easy. We just shake the trees and the nuts fall out!

// As they fall down the nuts might hit branches:

// Sometimes they bounce left.
// Sometimes they bounce right.
// Sometimes they get stuck in the tree and don't fall out at all.
// Legend
// o = a nut
// \ = branch. A nut hitting this branch bounces right
// / = branch. A nut hitting this branch bounces left
// _ = branch. A nut hitting this branch gets stuck in the tree
// . = leaves, which have no effect on falling nuts
// | = tree trunk, which has no effect on falling nuts
//   = empty space, which has no effect on falling nuts

// Kata Task
// Shake the tree and count where the nuts land.

// Output - An array (same width as the tree) which indicates how many nuts fell at each position ^

// ^ See the example tests

// Notes
// The nuts are always found at the top of the tree
// Nuts do not affect the falling patterns of other nuts
// There are always enough spaces for nuts to fall between branches
// There are no branches at the extreme left/right edges of the tree matrix so it is not possible for a nut to fall "out of bounds"


// Example
// .o.oooooo.o.o.oooooo.
// ..\.\.../..\.../..\..
// ..../..\..../....../.
// .....\...././.\..\.\.
// ...../../././...\....
// .../.../..\./.\..\...
// ./.......\../.\../...
// ....\..../....././...
// .../.\._.\../._../.\.
// .\...././....\../.\..
// ./......././.../../..            
// 101005000020000000040

const shakeTree = function(tree: string[][]) {
    const width = tree[0].length;
    const height = tree.length;
    const result = Array(width).fill(0);

    for (let x = 0; x < width; x++) {
        if (tree[0][x] === 'o') {
            let currX = x;
            let stuck = false;

            for (let y = 1; y < height; y++) {
                const cell = tree[y][currX];

                if (cell === '/') {
                    currX -= 1;
                } else if (cell === '\\') {
                    currX += 1;
                } else if (cell === '_') {
                    stuck = true;
                    break;
                }
            }

            if (!stuck) {
                result[currX]++;
            }
        }
    }

    return result;
};

// Example test
console.log(shakeTree([
    " o o o  ".split(""),
    " /    / ".split(""),
    "   /    ".split(""),
    "  /  /  ".split(""),
    "   ||   ".split(""),
    "   ||   ".split(""),
    "   ||   ".split("")
]));
