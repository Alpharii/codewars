// 6 kyu
// IntroToArt

// Help prepare for the entrance exams to art school.

// It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, and the only condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that accurately depicts the object.

// Write a function that takes an integer as height and returns a list of strings with a line-by-line image of the object.

// Below is an example function:

// # height = 3 should return:
// [
//   "*   *   *",
//   " * * * * ",
//   "  *   *  "
// ]

// # height = 5 should return:
// [
//   "*       *       *",
//   " *     * *     * ",
//   "  *   *   *   *  ",
//   "   * *     * *   ",
//   "    *       *    "
// ]h
// Return an empty list for height < 2.

export function getW(height: number): string[] {
    if (height < 2) return [];
  
    const width = height * 4 - 3;
    const mid = Math.floor(width / 2);
  
    const result: string[] = [];
  
    for (let i = 0; i < height; i++) {
      let line = "";
  
      for (let j = 0; j < width; j++) {
        if (
          j === i ||
          j === mid - i ||
          j === mid + i ||
          j === width - 1 - i
        ) {
          line += "*";
        } else {
          line += " ";
        }
      }
  
      result.push(line);
    }
  
    return result;
}


// Test cases
console.log(getW(-5)); // []
console.log(getW(1));  // []
console.log(getW(3));  // ["*   *   *", " * * * * ", "  *   *  "]
console.log(getW(5));  // ["*       *       *", " *     * *     * ", "  *   *   *   *  ", "   * *     * *   ", "    *       *    "]
console.log(getW(7));  // ["*           *           *", " *         * *         * ", "  *       *   *       *  ", "   *     *     *     *   ", "    *   *       *   *    ", "     * *         * *     ", "      *           *      "]

"*   *   *" 
" * * * * "
"  *   *  "