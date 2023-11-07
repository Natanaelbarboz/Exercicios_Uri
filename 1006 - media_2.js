var fs = require('fs');

var inputFile = fs.readFileSync('input.txt','utf8');
var lines = inputFile.split('\n');

var peso_a = 2;
var peso_b = 3;
var peso_c = 5;

var a = parseFloat(lines[0]).toFixed(1);
var b = parseFloat(lines[1]).toFixed(1);
var c = parseFloat(lines[2]).toFixed(1);

var nota_a = peso_a * a;
var nota_b = peso_b * b;
var nota_c = peso_c * c;    
var peso = peso_a + peso_b + peso_c;

var nota = (nota_a + nota_b + nota_c) / peso;

console.log("MEDIA = "+ nota.toFixed(1));