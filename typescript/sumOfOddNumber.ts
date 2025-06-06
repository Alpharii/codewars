// 7 kyu
// Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

export function rowSumOddNumbers(n: number): number {
    return n * n * n
}

console.log((rowSumOddNumbers(1), 1))
console.log((rowSumOddNumbers(2), 8))
console.log((rowSumOddNumbers(13), 2197))
console.log((rowSumOddNumbers(19), 6859))
console.log((rowSumOddNumbers(41), 68921))
console.log((rowSumOddNumbers(42), 74088))
console.log((rowSumOddNumbers(74), 405224))
console.log((rowSumOddNumbers(86), 636056))
console.log((rowSumOddNumbers(93), 804357))
console.log((rowSumOddNumbers(101), 1030301))