/* 
let palavra = 'Rogerio';
let palavraInvertida = '';

for( let index = 0; index < palavra.length; index += 1) {
    palavraInvertida += palavra[palavra.length - 1 - index]; //chamo o indice de trás para frete 
}

console.log(palavraInvertida); */


// ============================================= usando o .splice  ==============================================


let palavra = 'rogerio';
let palavraInvertida ;

palavraInvertida = palavra.split('').reverse().join('');

console.log(palavraInvertida);