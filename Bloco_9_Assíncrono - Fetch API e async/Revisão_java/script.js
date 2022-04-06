/* let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
 */
/* console.log(typeof(patientInfo.firstName));
console.log(typeof(patientId));
console.log(typeof(patientInfo.lastName));
console.log(typeof(isEnrolled));

console.log(typeof(testeDe)); // retorna indefinido
console.log(typeof([[]])); // retorna um objeto
console.log(typeof(({}))); // retorna um objeto 

 */

//================ typeof imprime o tipo da variavel ( boolean, number, sting, objeto) ========================
/* 
function  calculo(base, altura) { // chamo a função usando parametros.
     return  base * altura;       // informei o que a função faz de retorno
}   */     
/* console.log(calculo(8, 4)); */      // informei o valor dos parametros invocando a função( calculo)

 
//================ função inicio ===============================================================

/* //função com parametro 
 function cumprimento() {           //Não i nformei parametro ()
     return 'Bom dia';              //Quando chamei a função ela imprimiu o retur.
} */
/*  console.log(cumprimento());
 */ 

 //================ função inicio ===============================================================

/* 
 let status = 'logado';

 function logarEdeslogar() {
     if (status === 'deslogado') {
         status = 'logado';
     } else {
         status = 'deslogado';
     }
      status ='deslogado';
 } */

/* console.log(status);


logarEdeslogar();
console.log(status); */


//================================if else =========================================

/* 
function pessoasAprovadas(nota) {
    if ( nota === 10 ) {
     return 'Tá ruim';
    } else if ( nota > 10 && nota < 50 ) {
    return 'Ta meia Boca';
    } else if ( nota >= 50 &&  nota < 80 ) {
    return 'Quase lá';
    } else if ( nota >= 80 && nota <= 100 ) {
    return ' Você é o cara';
    } else {
    return 'Nem fez a prova';
    }
}; */

/* console.log(pessoasAprovadas(82));
 */

//===================================  =====================================================

// já fiz com uma função 

/* function cafeDaManha(comida, bebida) {
    if(comida === 'pão' && bebida === 'café') {
        return 'Que maravilha hein !!';
    } else if ( comida ===  '' && bebida === 'café'){
        return 'lIQUIDO NÃO ENCHE BARRIGA!!';
    } else if (comida === 'pão' && bebida === '') {
        return ' Deceu seco, vixiii !!!!';
    } else {
        return 'ta dificil encontrar comida aqui, fuiii'
    }
 
} */

/* console.log(cafeDaManha('', ''));
 */


//==========================================  switch case ============================//
/* 
function pedidoCafe (oqueTem) { 
    let oqueTem = pedidoCafe;
    switch (oqueTem) {
        case 'bebida': 
            console.log('quero café');
            break;  

            case 'comida':
                console.log('cuscus com ovo');
                break;
    
                case 'fruta':
                    console.log('odeio mamão');
                    break;

                    case 'biscoito':
                    console.log('QUERO RECHEADO');
                    break;



        default: console.log('Não pedi isso !!');
            break;
    }


}

 *//* console.log(oqu(biscoito));
 */
//==========================================  switch case ============================//

/* let = candidato = 'reprovado';

switch (candidato) {
    case 'aprovado':
        console.log('parabens');        
        break;  

        case 'reprovado':
          console.log('continue tentendo');
        break;

    default: console.log( 'Relaxa Deus tem um plano');
        break;
}
 */
//==========================================  array e loop for   ============================//

/* 
//regras de negocio da mega sena 


 // 6 mumeros sorteados aleatorios
 // esses numeros pode ir de 1 a 60
 // para vencer precisa acertar 4 a 6 numeros 
 
 let numeroDeAcertos =[];
 let numerosDaMegaSena = [];
 let jogoDoRogerio = [48, 28, 15, 3, 8, 56];
 
 // criei uma forma aleatoria de gerar 6 numeros
 let primeiroNumeroSorteado = Math.ceil(Math.random()* 60);
 let segundoNumeroSorteado = Math.ceil(Math.random()* 60 );
 let terceiroNumeroSorteado = Math.ceil(Math.random()* 60);
 let quartoNumeroSorteado = Math.ceil(Math.random()* 60 );
 let quintoNumeroSorteado = Math.ceil(Math.random()* 60);
 let sextoNumeroSorteado = Math.ceil(Math.random()* 60 );

 // vou colocar esses numeros dentro de meu arrey numerosDaMegaSena usando o .push
 numerosDaMegaSena.push(primeiroNumeroSorteado);
 numerosDaMegaSena.push(segundoNumeroSorteado);
 numerosDaMegaSena.push(terceiroNumeroSorteado);
 numerosDaMegaSena.push(quartoNumeroSorteado);
 numerosDaMegaSena.push(quintoNumeroSorteado);
 numerosDaMegaSena.push(sextoNumeroSorteado);

for (let index = 0; index < numerosDaMegaSena.length; index += 1) { // loop do jogo sorteado
for (let index2 = 0; index2 < jogoDoRogerio.length; index2 += 1) {
    if( numerosDaMegaSena[index] === jogoDoRogerio[index2]) {
        // se for igual temos um numero certo
        numeroDeAcertos += 1 // eu adiciono 1 para cada vez que for encontrado um numero igual no loop.
/*         console.log('Numero de acertos :' + numeroDeAcertos);
 */
  //  }
//}
     
//}




/*  console.log(numerosDaMegaSena);
 *//*  console.log('Jogo sorteado :' + numerosDaMegaSena);
 console.log('Jogo do rogerio  :' + jogoDoRogerio); */

 //vou comprar o jogo sorteado e o jogo feito e comparar os dois


//==========================================  logica ============================//

//regras de negocio Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.



//console.log(Math.max(4, 5));  //Coloco os valores dentro e não invoco ele lá fora.  */

//==========================================  array ============================//


/*let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[1];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro */

//==========================================  array ============================//


//Obtenha o valor (item) "Serviços" do array menu.

/* 
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu[1]);
 */

//Procure o índice do valor "Portfólio" do array menu :

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = 2;

console.log(indexOfPortfolio);
 */

//Adicione o valor "Contato" no final do array menu :


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push = ('zouraaa!', 'Contato');


console.log(menu);


//========================== for/for/of ===================================================