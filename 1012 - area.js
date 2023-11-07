var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split(' ');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

var triangulo = (a * c)/2;
var circulo = 3.14159 * c**2;
var trapezio = (a + b) * c /2;
var quadrado = b * b;
var retangulo = a * b;

console.log("TRIANGULO: " + triangulo.toFixed(3));;
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
