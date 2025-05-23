// 7 kyu
// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines 
// whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


export function isIsogram(str: string): boolean{
    str = str.toLowerCase()
    const arr: string[] = []
    for (let i = 0; i < str.length; i++) {
        if(arr.includes(str[i])) return false
        arr.push(str[i])
    }
    return true
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("isIsogram"))
console.log(isIsogram(""))