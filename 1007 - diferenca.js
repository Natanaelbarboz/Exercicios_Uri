var fs = require('fs');

var inputFile = fs.readFileSync('input.txt','utf8');
var lines = inputFile.split('\n');


var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var c = parseInt(lines[2]);
var d = parseInt(lines[3]);

var diferenca = (a*b-c*d);

console.log("DIFERENCA = "+ diferenca);