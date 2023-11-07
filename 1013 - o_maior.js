var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split(' ');

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);
var c = parseInt(lines[2]);

var maiorAB = (a + b + Math.abs(a-b))/2;

var maior = (c + maiorAB + Math.abs(c - maiorAB))/2;

console.log(maior + " eh o maior");