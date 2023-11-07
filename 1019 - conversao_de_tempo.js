var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var entrada = parseInt(lines[0]);

var resto_horas = entrada % 3600;
var horas = (entrada - resto_horas) / 3600;

var resto_minutos = resto_horas % 60;
var minutos = (resto_horas - resto_minutos) / 60;

var segundos = resto_minutos;

console.log(horas+":"+minutos+":"+segundos)
