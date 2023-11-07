var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var km = parseInt(lines[0]);
var combustivel = parseFloat(lines[1]);

var consumo = km / combustivel;

console.log(consumo.toFixed(3) + " km/l");