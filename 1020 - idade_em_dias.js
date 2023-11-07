var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var entrada = parseInt(lines[0]);

var resto_ano = entrada % 365;
var ano = (entrada - resto_ano) / 365;

var resto_mes = resto_ano % 30;
var mes = (resto_ano - resto_mes) / 30;

var dia = resto_mes;

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dia + " dia(s)");