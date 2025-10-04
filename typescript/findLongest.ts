// 7  kyu
// Most digits

// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

class Kata {
  static findLongest(array:number[]):number {
    let longest = 0
    let result = 0
    array.map((x) => {
        if(x.toString().length > longest){
            longest = x.toString().length
            result = x
        }
    })
    return result
  }
}

console.log(Kata.findLongest([1, 10, 100]), 100);
console.log(Kata.findLongest([9000, 8, 800]), 9000);
console.log(Kata.findLongest([8, 900, 500]), 900);

// best practice
// class Kata {
//   static findLongest(array:number[]):number {
//     return array.reduce((a, b) => {
//         return b.toString().length > a.toString().length ? b : a
//     })
//   }
// }
