/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
 */

let valor1 = 13;
let valor2 = 11;
let valor3 = 14;

if (valor1 > valor2 && valor1 > valor3) {
  console.log(valor1);
} else if (valor2 >valor1 && valor2 > valor3) {
  console.log(valor2);
} else {
  console.log(valor3);
}
