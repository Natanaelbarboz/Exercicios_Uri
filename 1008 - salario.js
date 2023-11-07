var fs = require('fs');

var inputFile = fs.readFileSync('input.txt','utf8');
var lines = inputFile.split('\n');

var funcionario = parseInt(lines[0]);
var horas = parseInt(lines[1]);
var valor_hora = parseFloat(lines[2]).toFixed(2);

var salario = horas * valor_hora;

console.log("NUMBER = " + funcionario);
console.log("SALARY = U$ " + salario.toFixed(2));