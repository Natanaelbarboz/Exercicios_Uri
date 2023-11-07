var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var x = [];

for(let i = 0; i < lines.length; i++){    
    x.push(parseFloat(lines[i]).toFixed(1));
}

for(let i = 0; i < x.length; i++){
    if(x[i] <= 10){
        console.log(`A[${i}] = ${x[i]}`);
    }
}