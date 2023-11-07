var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var n1 = parseInt(lines[0]);
var n2 = parseInt(lines[1]);
var n3 = parseInt(lines[2]);
var n4 = parseInt(lines[3]);
var n5 = parseInt(lines[4]);

var entradas = [n1, n2, n3, n4, n5];

var contador_par = 0;
var contador_impar = 0;
var contador_positivo = 0;
var contador_negativo = 0;

for(var i = 0; i < entradas.length; i++){
    if(parseInt(entradas[i]) % 2 == 0){        
        contador_par++;        
    }  
    if(parseInt(entradas[i]) % 2 !== 0){        
        contador_impar++;        
    }
    if(parseInt(entradas[i]) > 0){        
        contador_positivo++;        
    }
    if(parseInt(entradas[i]) < 0){        
        contador_negativo++;        
    }
}
console.log(contador_par + " valor(es) par(es)");
console.log(contador_impar + " valor(es) impar(es)");
console.log(contador_positivo + " valor(es) positivo(s)");
console.log(contador_negativo + " valor(es) negativo(s)");
