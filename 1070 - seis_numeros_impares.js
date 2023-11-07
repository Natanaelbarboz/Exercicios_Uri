var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var entrada = parseInt(lines[0]);
var contagem = 0;

for(var i = 0; contagem < 6; i++){
    if((entrada + i) % 2 != 0){
        contagem++;
        console.log((entrada + i));
    }
}

/*
while (contagem < 6) {
    for(var i = 1; contagem < 6; i++){
        if(i % 2 != 0){
            contagem++;
            console.log(i)
        }
    }
}*/