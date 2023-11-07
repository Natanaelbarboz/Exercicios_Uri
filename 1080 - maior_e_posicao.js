var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var maior = 0;
var index = 0;

for(var i =0; i < lines.length;i++){
    if(parseInt(lines[i]) > maior){
        maior = parseInt(lines[i]);
        index = i+1;
    }
}
console.log(maior);
console.log(index);
