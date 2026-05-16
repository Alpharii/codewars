// 7 kyu
// How Many Unique Consonants?

// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u".

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.
// Examples

// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7


function countConsonants(str) {
    str = str.toLowerCase()
    let res = []

    for(let i = 0; i<str.length; i++){
        if(str[i].toLowerCase() == str[i].toUpperCase()){
         continue
        }
        if(!['a', 'i', 'u', 'e', 'o'].includes(str[i]) && !res.includes(str[i])){
            res.push(str[i])
        }
    }

    console.log('consonants', res)
    return res.length;
}

// console.log(countConsonants("sillystring")) // 7
console.log(countConsonants("Count my unique consonants!!")) //
// console.log(countConsonants("aiueo")) //0
// console.log(countConsonants("abcdefghijklmnopqrstuvwxyz")) // 21