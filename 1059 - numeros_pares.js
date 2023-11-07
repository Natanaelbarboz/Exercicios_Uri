var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

for(var i =1; i<= 100; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}