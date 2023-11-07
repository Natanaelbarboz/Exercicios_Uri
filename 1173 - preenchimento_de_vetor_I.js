var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var v = parseInt(lines[0]);
var x = [];

x.push(v);

for(let i = 0; i < 9; i++){
    x.push(parseInt(x[i]*2));
    
}

for(let i = 0; i < x.length; i++){
    console.log(`N[${i}] = ${x[i]}`);
}