// 6 kyu
// A String of Sorts

// Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

// sortString("foos", "of")       => "oofs"
// sortString("string", "gnirts") => "gnirts"
// sortString("banana", "abn")    => "aaabnn"
// To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

// Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.

function sortString(string,ordering) {
    const order = [...new Set(ordering)];
    const chars = string.split('');
    
    let sortedPart = []
    for(let i=0; i<order.length; i++){
        for(let j=0; j<string.length; j++){
            if(order[i] === string[j]){
                sortedPart.push(chars[j]);
            }
        }
    }

    let restPart = []
    for(let i=0; i<string.length; i++){
        if (!order.includes(chars[i])) {
            restPart.push(chars[i]);
        }
    }

    return sortedPart.join('') + restPart.join('');
}

console.log(sortString("foos", "of"), "oofs");
console.log(sortString("string", "gnirts"), "gnirts");
console.log(sortString("banana","abn"), "aaabnn");
