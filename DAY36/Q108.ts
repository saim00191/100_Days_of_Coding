
function areStringEqualIgnoreCase(str1: string, str2: string): boolean {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(areStringEqualIgnoreCase("World" , "WORD")); //false
console.log(areStringEqualIgnoreCase("Hello" , "HELLO")); //true