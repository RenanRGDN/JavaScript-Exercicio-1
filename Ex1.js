const prompt = require ('prompt-sync')();

const day = Number (prompt ('Digite a sua idade em anos: '));

const month = Number (prompt('Digite a sua idade em meses: '));

const year = Number (prompt('Digite a sua idade em dias: '));

const days = (year*365) + (month*30) + day;

console.log (`\nYou have ${days} to live`);
console.log ('\nYou have ' + days + ' to live');