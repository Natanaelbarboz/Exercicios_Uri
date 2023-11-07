var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var entrada = parseInt(lines[0]);

var coelho = 0;
var rato = 0;
var sapo = 0;


for(var i = 1; i <= entrada; i++){

    var entrada_cobaia = lines[i].split(' ');

    var qtd = parseInt(entrada_cobaia[0]);
    var tipo = entrada_cobaia[1];


    if(tipo == "C"){
        coelho += qtd; 
    }
    if(tipo == "R"){
        rato += qtd;
    }
    if(tipo == "S"){
        sapo += qtd;
    }
}
var total = coelho + rato + sapo;
var percentualCoelhos = (coelho / total) * 100;
var percentualratos = (rato / total) *100;
var percentualsapos = (sapo / total) * 100;
console.log("Total: "+total+" cobaias")
console.log("Total de coelhos: "+coelho);
console.log("Total de ratos: "+rato);
console.log("Total de sapos: "+sapo);
console.log("Percentual de coelhos: "+percentualCoelhos.toFixed(2)+" %");
console.log("Percentual de ratos: "+percentualratos.toFixed(2)+" %");
console.log("Percentual de sapos: "+percentualsapos.toFixed(2)+" %");



