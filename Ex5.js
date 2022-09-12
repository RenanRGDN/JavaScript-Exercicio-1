const prompt = require('prompt-sync')();
		
const not1 = Number(prompt('Digite a primeira nota: '));
const not2 = Number(prompt('Digite a segunda nota: '));
const not3 = Number(prompt('Digite a terceira nota: '));

const media = ((2 * not1) + (3 * not2) + (5 * not3)) / 10;

console.log(`A sua média é: ${media}`);