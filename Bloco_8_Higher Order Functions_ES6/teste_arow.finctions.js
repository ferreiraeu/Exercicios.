

/* 

const meuNome = (nome, sobrenome) => {
    return `Meu nome é ${nome} ${sobrenome}`
}

console.log('Rogério', 'Ferreira');
 */

// função comum 
//=====================================================================================================================
/* const eu = function (nome, age) {
    return ( nome - age)
}
console.log(eu( 1, 26));

 */
//arow function 
//=====================================================================================================================
/* const eu = (nome, age) => { //retira o function e isere o arow function => 
    return ( nome - age) //corpo da função 
}
console.log(eu( 1, 26));
 */

//arow function 
//=====================================================================================================================
/* const eu =(nome, age) => ( nome - age) // tiro o retur e retiro as chaver , deixo somente o corpo da função 
console.log(eu( 1, 26)); */
//=====================================================================================================================


//função conta palavras (function normal)

/* function numeroDePalavras (frase) {
    return frase.split(' ').length;
}
console.log(numeroDePalavras('meu ovo')); */
/* console.log('xablau'); */
//=====================================================================================================================

//agora com arow function
/* 
const numeroDePalavras = (frase) => frase.split(' ').length;
console.log(numeroDePalavras('meu ovo')); */
//=====================================================================================================================
  
//tranformar em arow function
/* function pessoa (nomeDaPessoa, idadeDaPessoa) {
    return{
        nome: nomeDaPessoa,
        idade: idadeDaPessoa
    }
}
 console.log(pessoa('Meu nome não te interessa', 'muito menos a idade')); */

//=====================================================================================================================
 /* 
const pessoa = (nomeDaPessoa, idadeDaPessoa) => ({nome:nomeDaPessoa, idade: idadeDaPessoa,}); // importante , quando declaramos 2 cahves ou mais , nos colcoamos entre parenteses.
console.log(pessoa('Meu nome não te interessa', 'muito menos a idade'));
 */
//=====================================================================================================================

function soma (numero1, numero2) {
    return numero1 + numero2;
}
const somaDasVariaveis = soma;

console.log(somaDasVariaveis);
