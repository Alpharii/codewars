// 7 kyu
// Credit card issuer checking

// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. 
// If the number cannot be matched then the function should return the string Unknown.

// Where Issuer is defined with the following enum type.

enum Issuer {
    VISA = 'VISA',
    AMEX = 'AMEX',
    Mastercard = 'Mastercard',
    Discover = 'Discover',
    Unknown = 'Unknown',
}

export const getIssuer = (x: number): Issuer => {
    const str = x.toString();
    
    if (str.startsWith("4") && (str.length === 13 || str.length === 16)) {
        return Issuer.VISA;
    }

    if ((str.startsWith("34") || str.startsWith("37")) && str.length === 15) {
        return Issuer.AMEX;
    }

    const firstTwo = parseInt(str.slice(0, 2), 10);
    if (firstTwo >= 51 && firstTwo <= 55 && str.length === 16) {
        return Issuer.Mastercard;
    }

    if (str.startsWith("6011") && str.length === 16) {
        return Issuer.Discover;
    }

    return Issuer.Unknown;
};

console.log(getIssuer(4111111111111111), Issuer.VISA)
console.log(getIssuer(348282246310005), Issuer.AMEX)
console.log(getIssuer(9111111111111111), Issuer.Unknown)