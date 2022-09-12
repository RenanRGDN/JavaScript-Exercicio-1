const prompt = require('prompt-sync')();

const days = Number(prompt('Digite a sua idade em dias:'));
const year = (days / 365).toFixed(0);
const month = ((days%365)/30).toFixed(0);
const day = ((days%365)%30).toFixed(0);
console.log (`Você tem ${day} dias:` )
console.log (`Você tem ${month} meses:`)
console.log (`Você tem ${year} anos:`)