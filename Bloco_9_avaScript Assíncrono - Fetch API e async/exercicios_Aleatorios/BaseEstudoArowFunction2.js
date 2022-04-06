/* const resultadoFinal = (resultado) => {
    console.log(resultado);

}
//declaraçã de arow functions.  let ou const  nomeDaFunção =       () => {}.

const funcaoSoma = (numero1, numero2) => numero1 + numero2 ; 
//crio uma funçao para guardar os valores e criar minha soma ou oque desejo. ( aqui já sai o resultado porém não lancei os parametros que são os valores de numero 1 e numero 2)

let resultadoDaSoma = funcaoSoma (10, 7); // invocamos a função aqui lancei os valoes da função soma la de cima .
resultadoFinal(resultadoDaSoma);//aqui atribui que resultadoFnal ( minha primeira funçao lá em cima)  seu resultado ( resultado = resultado da soma);


//invoquei 2 funções fora

 */

// ==================================== Vamos diminuir - fazer de outra forma ========================================
/* 
const resultadoFinal = (resultado) => {
    console.log(resultado);
}

const funcaoSoma = (numero1, numero2) => {
  let ondeAconteceAsoma = numero1 + numero2;
  resultadoFinal(ondeAconteceAsoma);
}

funcaoSoma(4, 12); //aqui eu chamo a função e passo os valores



//invoquei 1 funções fora
 */


// ==================================== Vamos diminuir - fazer de outra forma ========================================


const resultadoFinal = (resultado) => {
    console.log(resultado);
}

const funcaoSoma = (numero1, numero2, callback) => {
  let ondeAconteceAsoma = numero1 + numero2;
  callback(ondeAconteceAsoma);
}

funcaoSoma(4, 12, resultadoFinal); //aqui eu chamo a função e passo os valores

