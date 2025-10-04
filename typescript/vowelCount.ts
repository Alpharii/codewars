// 7 kyu
// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

class Katas {
  static getCount(str: string): number {
    str = str.toLowerCase()
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if(["a", "i", "u", "e", "o"].includes(str[i])) result +=1
    }
    return result
  }
}

console.log(Katas.getCount("abracadabra"), 5)