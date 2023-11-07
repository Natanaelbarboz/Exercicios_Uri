var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var tempo = parseInt(lines[0]);
var velocidade = parseInt(lines[1]);
var consumo = 12;

var consumo_viagem = (velocidade*tempo) / consumo;

console.log(consumo_viagem.toFixed(3));