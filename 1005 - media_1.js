var fs = require('fs');

var inputFile = fs.readFileSync('input.txt','utf8');
var lines = inputFile.split('\n');

var peso_a = 3.5;
var peso_b = 7.5;

var a = parseFloat(lines[0]).toFixed(1);
var b = parseFloat(lines[1]).toFixed(1);

var nota_a = peso_a * a;
var nota_b = peso_b * b;
var peso = peso_a + peso_b;

var nota = (nota_a + nota_b) / peso;

console.log("MEDIA = "+ nota.toFixed(5));