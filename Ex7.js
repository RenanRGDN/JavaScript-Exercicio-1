const prompt = require('prompt-sync')();

const numA = Number(prompt('Digite o valor de A: '));
const numB = Number(prompt('Digite o valor de B: '));
const numC = Number(prompt('Digite o valor de C: '));
const numD = Number(prompt('Digite o valor de D: '));
const numE = Number(prompt('Digite o valor de E: '));
const numF = Number(prompt('Digite o valor de F: '));

const numX = ((numC * numE) - (numB * numF)) / ((numA * numE) - (numB * numD));
const numY = ((numA * numF) - (numC * numD)) / ((numA * numE) - (numB * numD));

console.log(`X valor: ${numX}`);
console.log(`Y valor: ${numY}`);