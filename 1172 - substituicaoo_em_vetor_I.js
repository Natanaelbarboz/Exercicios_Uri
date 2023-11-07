var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var x = [];

for(let i = 0; i < lines.length; i++){
    if(parseInt(lines[i]) <= 0 ){
        x.push(1);
    }
    else{
        x.push(parseInt(lines[i]));
    }
}

for(let i = 0; i < x.length; i++){
    console.log(`X[${i}] = ${x[i]}`);
}



