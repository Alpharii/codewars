// 6 kyu
// Unique Cuts

// Task
// The function is given a string with lower-case characters. Split the string into as many non-empty substrings as possible, such that each character appears in only one substring. Return the list of lengths of the resulting substrings.

// Examples
// "abbccc" ➞ [1, 2, 3]
// # "a", "bb", "ccc"

// "abbacdceef" ➞ [4, 3, 2, 1]
// # "abba", "cdc", "ee", "f"

// "abacded" ➞ [3, 1, 3]
// # "aba", "c", "ded"

// "abcdea" ➞ [6]
// # "abcdea" because first letter is equal to the last letter.

function splitString(str) {
  let res = [];
  let end = 0;
  let size = 0;

  for (let i = 0; i < str.length; i++) {
    end = Math.max(end, str.lastIndexOf(str[i]));
    size++;

    if (i === end) {
      res.push(size);
      size = 0;
    }
  }

  return res;
}

// conoles.log( splitString(""), [] );
// console.log( splitString("abbccc"), [1, 2, 3] );
// console.log( splitString("abbacdceef"), [4, 3, 2, 1] );
console.log( splitString("abacded"), [3, 1, 3] );

//selesai pake ai