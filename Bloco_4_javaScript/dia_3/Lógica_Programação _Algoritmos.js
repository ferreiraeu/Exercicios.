/**  fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
*/

/** O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24*/

/** responda : Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
 */

let valor =[1];
/** Neste caso o loop for é diferênte, ele informa que meu indice começa no meu valor limite maximo ( onde quero comecar a contar) depois indice para quado for maior que 0 (Neste caso o zero não entra na multiplicação) e indice -= faz a adição regressiva do valor ( OBS: O VALOR DA ARRAY COMEÇA COM 1 */
for( let index = 4; index > 0; index -= 1){ 
      valor *= index;
}
console.log (valor);