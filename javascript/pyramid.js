// 7 kyu
// Return pyramids

// The task is very simple: you must return pyramids. Given a number n, you build a pyramid with n floors

// For example , given a n=4 you must to print this pyramid:

//    /\
//   /  \
//  /    \
// /______\ 

// Other example, given a n=6 you must to print this pyramid:

//      /\
//     /  \
//    /    \
//   /      \
//  /        \
// /__________\

// Another example, given a n=10, you must to print this pyramid:

//          /\
//         /  \
//        /    \
//       /      \
//      /        \
//     /          \
//    /            \
//   /              \
//  /                \
// /__________________\

// Note: a line feed character is needed at the end of the string.


function pyramid(n){
    let col = []
    for (let i = 1; i <= n; i++) {
        if(i === n && i !== 1){
            col.push("/" + ("_".repeat((i - 1) * 2)) + "\\")
        } else {
            col.push(" ".repeat(n-i) + "/" + " ".repeat((i-1) * 2) + "\\")
        }
    }
    return col.join("\n") + "\n";
}

console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(4))
console.log(pyramid(7))
