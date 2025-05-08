// 7 kyu
// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in
// descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

export function descendingOrder(n: number): number {
    return Number((n + '').split('').map(Number).sort((a,b) => b - a).join(''))
}

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)