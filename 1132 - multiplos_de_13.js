var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]);
var b = parseInt(lines[1]);

var maior = 0;
var menor = 0;
var soma = 0;

if(a > b){
    maior = a;
    menor = b;
}else{
    maior = b;
    menor = a;
}

for(var i = menor; i <= maior; i++){
    if(i % 13 != 0){
        soma += i;
    }
}

console.log(soma);