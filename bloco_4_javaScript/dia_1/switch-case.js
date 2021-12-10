
let luzTransito = "Vermelho";

switch(luzTransito) {
    case "Vermelho": // dois pontos  ( caso  seja vermelho , apresenta a mensagem e para no break)
        console.log("Pare");
        break; // para aqui 


    case "Amarelo": 
        console.log("Atenção");
        break;
    
    case "Verde":
        console.log("Siga em frente");
        break;
    
    default: // dois pontos ( quanso nenhuma das ações a cima são atendidada e aciona o break)
        console.log("Sinal quebrado");
}


/* Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código do caso avaliado é executado. Se nenhum valor satisfizer os casos listados, é executado o código em default . */


let candidato;

switch ("candidato") {
    case"APROVADO !":
        console.log("parabens você esta aprovado !");
        break;

    case "LISTA DE ESPERA":
        console.log("FÉ no pai que a lista sai!");
        break;
    
    case "REPROVADO":
        console.log("Sorte na próxima");
        break;

    default:
        console.log("Você nem tentou fazer a prova");

}