var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var contador_par = 0;

for(var i = 0; i < lines.length; i++){
    if(parseInt(lines[i]) % 2 == 0){        
        contador_par++;        
    }    
}
console.log(contador_par + " valores pares");
