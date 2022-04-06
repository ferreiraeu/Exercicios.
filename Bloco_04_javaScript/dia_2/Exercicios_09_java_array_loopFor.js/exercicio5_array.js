/** Utilizando for , descubra qual o maior valor contido no array e imprima-o*/

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
for (let i = 1; i < numbers.length; i+= 1) {
  if (numbers[i] > maior) {  /** se ( number[i] os intens da array) são maiores que a variavel (maio  r) então declaro a variavel maior sendo: ( maior = numbers[i] então "maior" é o maior item da array */
    maior = numbers[i];
  }
}
console.log(maior);

