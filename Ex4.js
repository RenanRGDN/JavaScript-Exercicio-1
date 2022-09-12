const prompt = require('prompt-sync')();

const notA = Number(prompt('Digite a Nota A: '));
const notB = Number(prompt('Digite a Nota B: '));
const notC = Number(prompt('Digite a Nota C: '));

const notR = Math.pow((notA + notB), 2);
const notS = Math.pow((notB + notC), 2);

const notD = (notR + notS) / 2;

console.log(`Resultado: ${notD}`);