// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function generateFibonacci(limit) {
    let fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] < limit) {
        let newValue = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(newValue);
    }
    return fibonacci;
}

function checkFibonacci(number) {
    let sequence = generateFibonacci(number);
    return sequence.includes(number);
}

rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", (input) => {
    let number = parseInt(input);

    if (isNaN(number)) {
        console.log("Por favor, insira um número válido.");
    } else {
        if (checkFibonacci(number)) {
            console.log(`✅ O número ${number} pertence à sequência de Fibonacci!`);
        } else {
            console.log(`❌ O número ${number} NÃO pertence à sequência de Fibonacci.`);
        }
    }

    rl.close();
});