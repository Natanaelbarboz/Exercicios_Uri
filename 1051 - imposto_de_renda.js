var fs = require('fs');

var input = fs.readFileSync('input.txt','utf8');
var lines = input.split('\n');

var salario = parseFloat(lines[0]);

if (salario >= 0 && salario <= 2000.00) {
  console.log("Isento");
} else if (salario >= 2000.01 && salario <= 3000.00) {
  var imposto = (salario - 2000.00) * 0.08;
  console.log(`R$ ${imposto.toFixed(2)}`);
} else if (salario >= 3000.01 && salario <= 4500.00) {
  var reducaoIncidencia = salario - 3000.00;
  var incidencia = 1000.00 * 0.08;
  var imposto = reducaoIncidencia * 0.18;
  var impostoTotal = imposto + incidencia;
  console.log(`R$ ${impostoTotal.toFixed(2)}`);
} else if (salario > 4500.00) {
  var reducaoIncidencia = salario - 4500.00;
  var incidencia = 1000.00 * 0.08;
  var incidencia2 = 1500.00 * 0.18;
  var imposto = reducaoIncidencia * 0.28;
  var impostoTotal = incidencia + incidencia2 + imposto;
  console.log(`R$ ${impostoTotal.toFixed(2)}`);
}