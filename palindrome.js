// Write a program that checks whether a word is a palindrome or not.
let readline = require('readline')

function checkPalindrome(string) {

    let arrayValues = string.split('')

    let reverseArrayValues = arrayValues.reverse()

    let reverseString = reverseArrayValues.join('')

    if(string == reverseString) {
        console.log('It is a palindrome')
    }
    else {
        console.log('It is not a palindrome')
    }
}

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter a string: ', function (string) {
    checkPalindrome(string)
    rl.close()
})
