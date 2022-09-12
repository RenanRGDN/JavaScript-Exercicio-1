const prompt = require('prompt-sync')();

const time = Number(prompt('Escreva o total de segundos do evento: '));

const hours = (time / 3600).toFixed(0);

const min = ((time % 3600) / 60).toFixed(0);
const sec = ((time % 3600) % 60).toFixed(0);

console.log(`O tempo foi ${hours} horas`);
console.log(`O tempo foi  ${min} minutos`)
console.log(`O tempo foi ${sec} segundos`)