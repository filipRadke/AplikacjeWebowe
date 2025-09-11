let cPrime = 0;
let cEven = 0;
let n;

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`How many numbers? `, num => {
    n = num;

    if (isNaN(n)) {
        console.log("Pleas input a number");
    }
    else {
        for (let i = 1; i <= n; i++) {
            if (isPrime(i)) {
                cPrime++;
            }
            if (isEven(i)) {
                cEven++;
            }
        }

        console.log("In range of 1 - " + n);
        console.log("Number of primes: " + cPrime);
        console.log("Number of evens: " + cEven);
    }
    rl.close();
});

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
