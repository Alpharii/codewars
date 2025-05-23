// 2299. Strong Password Checker II
// Easy
// Topics
// Companies
// Hint
// A password is said to be strong if it satisfies all the following criteria:

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

// Example 1:

// Input: password = "IloveLe3tcode!"
// Output: true
// Explanation: The password meets all the requirements. Therefore, we return true.
// Example 2:

// Input: password = "Me+You--IsMyDream"
// Output: false
// Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
// Example 3:

// Input: password = "1aB!"
// Output: false
// Explanation: The password does not meet the length requirement. Therefore, we return false. 

// Constraints:

// 1 <= password.length <= 100
// password consists of letters, digits, and special characters: "!@#$%^&*()-+".

function strongPasswordCheckerII(password: string): boolean {
    console.log(password.length)
    if(password.length < 8) return false
    console.log(password.length)

    let lowerCase
    let upperCase
    let digit
    let specialCharacter
    let position

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char === password[i + 1]) return false
        if (char >= 'a' && char <= 'z') lowerCase = true;
        else if (char >= 'A' && char <= 'Z') upperCase = true;
        else if (char >= '0' && char <= '9') digit = true;
        else if ("!@#$%^&*()-+".includes(char)) specialCharacter = true;
    }

    if(lowerCase && upperCase && digit && specialCharacter && position) return true
    return false
};

console.log(strongPasswordCheckerII("11A!A!Aa"))
console.log(strongPasswordCheckerII("a1A!A!A!"))
console.log(strongPasswordCheckerII("&3@396+&532#1)5^*^*56$269)(-54(3)7&)@1^)8)(@*@23#-%3189)45+6&8%0756!6+!+6"))