var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var entrada = parseInt(lines[0]);

var resto_cem = entrada %100;
var cem = (entrada - resto_cem) / 100;
var resto_cinquenta = resto_cem % 50;
var cinquenta = (resto_cem - resto_cinquenta) /50;
var resto_vinte = resto_cinquenta % 20;
var vinte = (resto_cinquenta - resto_vinte) / 20;
var resto_dez = resto_vinte % 10;
var dez = (resto_vinte - resto_dez) / 10;
var resto_cinco = resto_dez % 5;
var cinco = (resto_dez - resto_cinco) / 5;
var resto_dois = resto_cinco % 2;
var dois = (resto_cinco - resto_dois) / 2;
var resto_um = resto_dois % 1;
var um = (resto_dois - resto_um) /1;

console.log(entrada);
console.log(cem + " nota(s) de R$ 100,00");
console.log(cinquenta + " nota(s) de R$ 50,00");
console.log(vinte + " nota(s) de R$ 20,00");
console.log(dez + " nota(s) de R$ 10,00");
console.log(cinco + " nota(s) de R$ 5,00");
console.log(dois + " nota(s) de R$ 2,00");
console.log(um + " nota(s) de R$ 1,00");