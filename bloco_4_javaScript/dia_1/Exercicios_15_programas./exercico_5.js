/**Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
 */

let angulo1 = 45;
let angulo2 = 45;
let angulo3 = 90;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

let anguloPositivo = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

// se a soma dos angulos formar 180 ° esta correto

if (somaDosAngulos === 180) {
  console.log(true);
} else if (anguloPositivo < 0) {
  console.log(false);
} else {
  console.log("Mensagem de erro");
}
