// 2.  write a function that count the number of vowels in a sentence 

let string1 = " Individual family community"

let words = string1.split("")

function findVowels() {
    return words.filter(word => word.match(/[aeiou]/gi)).length;
}

console.log(findVowels());