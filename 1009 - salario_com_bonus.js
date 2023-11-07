var fs = require('fs');

var inputFile = fs.readFileSync('input.txt','utf8');
var lines = inputFile.split('\n');

var nome = lines[0];
var salario = parseFloat(lines[1]);
var vendas = parseFloat(lines[2]);
var comissao = 0.15;


var comissao = (vendas * comissao + salario);
console.log('TOTAL = R$ ' + comissao.toFixed(2));