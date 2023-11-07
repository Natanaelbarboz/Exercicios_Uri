var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var entrada_quantidade = parseInt(lines[0]);

for(var i = 1; i <= entrada_quantidade; i++){
    
    var sub_valores = parseInt(lines[i]);

    if(sub_valores == 0){
        console.log("NULL");
    }else{
        if(sub_valores % 2 == 0){
            if(sub_valores > 0){
                console.log("EVEN POSITIVE");
            }else{
                console.log("EVEN NEGATIVE");
            }
        }else{
            if(sub_valores > 0){
                console.log("ODD POSITIVE");
            }else{
                console.log("ODD NEGATIVE");
            }
        }
    }   
    
}

