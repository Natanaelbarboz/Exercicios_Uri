var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var entrada = parseInt(lines[0]);

for(var i = 1; i <= entrada; i++){
    if((entrada + i) % 2 === 0){
        
        console.log(i+"^2 = "+ i**2);
    }
}