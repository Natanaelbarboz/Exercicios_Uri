var i = 1;
var j = 7;
var joriginal = 7;
var somarj = 5;

while (i <= 9) {
    console.log("I="+ i+ " J=" + j)

    j--;

    if(j < somarj){
        i += 2;
        j = joriginal + 2;
        joriginal += 2;
        somarj += 2;
    }
}