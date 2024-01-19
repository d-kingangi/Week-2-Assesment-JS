// Using a Prompt allow user to enter numbers separated by commas then print the sum of the numbers

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by commas: ", function(userInput) {
    let numbers = userInput.split(',').map(Number);

    let sum = numbers.reduce((acc, num) => acc + num, 0);

    console.log("Sum of the numbers:", sum);

    rl.close();
});