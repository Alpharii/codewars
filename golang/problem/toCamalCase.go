//6 kyu
// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

package problem


func ToCamelCase(s string) string {
    for i := 0; i < len(s); i++ {
        if s[i] == '-' || s[i] == '_' {
            if i+1 < len(s) {
                nextChar := s[i+1]
                if nextChar >= 'a' && nextChar <= 'z' {
                    s = s[:i] + string(nextChar-32) + s[i+2:]
                } else {
                    s = s[:i] + s[i+1:]
                }
                i--
            }
        }
    }
    return s
}