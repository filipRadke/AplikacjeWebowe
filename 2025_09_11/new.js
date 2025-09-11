let cPrime = 0;
let cEven = 0;
let prompt = "How many numbers? ";

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt(prompt);
rl.prompt();

rl.on("line", function (input) {
    if (isNaN(input)) 
    {
        console.log("Pleas input a number")
        rl.prompt();
    }
    else {
        for (let i = 1; i <= input; i++) {
            if (isPrime(i)) {
                cPrime++;
            }
            if (isEven(i)) {
                cEven++;
            }
        }

        console.log("In range of 1 - " + input);
        console.log("Number of prime numbers: " + cPrime);
        console.log("Number of even numbers: " + cEven);
        rl.close()
    }
})

function isPrime(a) {
    for (let i = 2; i < a; i++) {
        if (a % i == 0)
            return false;
    }
    return true;
}

function isEven(a) {
    return a % 2 == 0;
}
