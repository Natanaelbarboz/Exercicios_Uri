var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var x = [];
var y = [];

for(let i = 0; i < lines.length; i++){    
    x.push(parseInt(lines[i]));
}

for(let i = 1; i <= x.length; i++){    
    y.push(x[x.length - i]);
}


for(let i = 0; i < y.length; i++){
        console.log(`N[${i}] = ${y[i]}`);    
}