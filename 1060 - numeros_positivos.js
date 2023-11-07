var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var contador_positivo = 0;
for(var i = 0; i < lines.length; i++){
    if(lines[i] >= 1 && lines[i] != null){
        contador_positivo++;
    }
}
console.log(contador_positivo + " valores positivos");

