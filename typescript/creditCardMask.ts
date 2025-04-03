// 7 kyu
// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"


// return masked string
export function maskify(cc: string): string {
    let masked = ''
    let value = ''

    if(cc.length < 4){
        return cc
    } else {
        masked = cc.split('').slice(0, cc.length-4).map((x) => x = '#').join('')
        value = cc.slice(-4)
    }

    return masked + value
}

console.log(maskify('4556364607935616')); // "############5616"
console.log(maskify('1'));               // "1"
console.log(maskify('11111'));           // "#1111"
