// 8 kyu
// Count of positives / sum of negatives

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 
// is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

export function countPositivesSumNegatives(input: any) {
    if (!input || input.length === 0) return [];
    let positive = 0
    let negative = 0
    input.map((x: number) => {
        if(x > 0) positive += 1
        if(x < 0) negative += x
    })

    return [positive, negative]
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
let actual = countPositivesSumNegatives(testData)
let expected = [10, -65]
console.log(actual)

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
actual = countPositivesSumNegatives(testData)
expected = [8, -50]
console.log(actual)