var fs = require('fs');

var inputFile = fs.readFileSync('input.txt','utf8');
var lines = inputFile.split('\n');

var raio = parseFloat(lines[0]);
var pi = 3.14159;

var volume = (4/3.0) * pi * raio**3;

console.log("VOLUME = " + volume.toFixed(3));