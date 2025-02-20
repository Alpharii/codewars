const high = (str: string): string => {
    let words = str.toLowerCase().split(" ");
    let alphabet = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let highestWord = "";
    let highestScore = 0;
    for(let i =0; i < words.length; i++) {
        let word = words[i];
        let wordScore = 0;
        for(let j = 0; j < word.length; j++) {
            let char = word[j];
            let index = alphabet.indexOf(char);
            if (index > 0) {
                wordScore += index;
            }
        }
        if (wordScore > highestScore) {
            highestScore = wordScore;
            highestWord = word;
        }
    }
    return highestWord;
};

console.log(high("what time are we climbing up the volcano")); // "taxi"