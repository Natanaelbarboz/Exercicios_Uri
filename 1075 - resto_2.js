var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var entrada = parseInt(lines[0]);

for(var i = 1; i < 10000;i++){
    if(i % entrada == 2){
        console.log(i);
    }
}