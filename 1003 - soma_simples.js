var fs = require('fs');

var inputFile = fs.readFileSync('input.txt','utf8');
var lines = inputFile.split('\n');

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);

var soma = a+b;

console.log("SOMA = " + soma);

