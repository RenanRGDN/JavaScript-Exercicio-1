const prompt = require('prompt-sync')();

const factory = Number(prompt('Custo da fábrica: '));

const distributor=28, tax=45;
const cost = factory + (distributor + tax);

console.log(`Valor do carro para o consumidor é: ${cost}.`)