var fs = require('fs');

// Nome do arquivo de entrada
var inputFile = fs.readFileSync('input.txt','utf8');
var lines = inputFile.split('\n');

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);

var prod = a * b;

console.log("PROD = " + prod);
