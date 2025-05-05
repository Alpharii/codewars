// 7 kyu
// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

export function findShort(s: string): number {
    const arr = s.split(' ')
    let shortest = Infinity
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length <= shortest) shortest = arr[i].length
    }
    return shortest
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
console.log(findShort("lets talk about javascript the best language"), 3); 
console.log(findShort("i want to travel the world writing code one day"), 1); 
console.log(findShort("Lets all go on holiday somewhere very cold"), 2);
console.log(findShort("Let's travel abroad shall we"), 2);