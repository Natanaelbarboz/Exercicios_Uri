var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var entrada_quantidade = parseInt(lines[0]);
var x = 0;
var y = 0;

for(var i = 1; i <= entrada_quantidade; i++){
    
    var sub_valores = parseInt(lines[i]);
    
    if(sub_valores >= 10 && sub_valores <= 20){
        x++;
    }else{
        y++;
    }
}

console.log(x + " in");
console.log(y + " out");