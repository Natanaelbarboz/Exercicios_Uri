var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split(' ');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

var delta = (b**2) - (4 * a * c);

var r1 = (-(b) + Math.sqrt(delta)) / (2*a);
var r2 = (-(b) - Math.sqrt(delta)) / (2*a);

if (a > 1 && b >= 1 && c >= 1 && delta > 0) {
    console.log("R1 =" ,r1.toFixed(5));
    console.log("R2 =" ,r2.toFixed(5));
    
} else {
    console.log("Impossivel calcular");
}

