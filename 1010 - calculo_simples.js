var fs = require('fs');

var inputFile = fs.readFileSync('input.txt','utf8');
var lines = inputFile.split('\n');

var linha1 = lines[0].split(' ');
var linha2 = lines[1].split(' ');

var peca1 = parseInt(linha1[0]);
var numpeca1 = parseInt(linha1[1]);
var vlpeca1 = parseFloat(linha1[2]);

var valorPeca1 = numpeca1 * vlpeca1;

var peca2 = parseInt(linha2[0]);
var numpeca2 = parseInt(linha2[1]);
var vlpeca2 = parseFloat(linha2[2]);

var valorPeca2 = numpeca2 * vlpeca2;

valorPagar = valorPeca1 + valorPeca2;

console.log("VALOR A PAGAR: R$ " + valorPagar.toFixed(2));