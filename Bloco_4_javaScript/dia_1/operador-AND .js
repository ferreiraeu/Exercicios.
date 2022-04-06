
//AND 
//OR 
//NOT 


/* 
1-Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

2-Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
3-Implemente condicionais para que:

°Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na ºvariável "message".
°Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
°Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
°Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
°Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
4-Agora imprima a variável message fora das suas condições.

*/
const correntHour = 5; // representa as horas do dia
let menssage ="";


if(correntHour >= 22){
console.log("Não deveríamos comer nada, é hora de dormir")
}else if(correntHour >= 18 && correntHour< 22){
console.log("Rango da noite, vamos jantar :D")
}else if(correntHour >=14 && correntHour< 18){
console.log("Vamos fazer um bolo pro café da tarde?")
}else if(correntHour >= 11 && correntHour < 14){
console.log("Hora do almoço!!!")
}else if(correntHour >= 4 && correntHour < 11){
console.log("Hmmm, cheiro de café recém passado")
}

console.log(menssage); //imprimindo a variável message fora das suas condições.









//AND - funciona como um (e) como pão -e- tomo café 

/*
const comida = "pão";
const bebida = "suco";

// minha função é true pois as condições estão corretas ( bebida e comida).
//caso seja suco ( na bebida) então condição false imprime a outra mensagem.
if (bebida === "café" && comida === "pão"){
console.log("Acertou meu pedido, muito Obrigado! ")
}else {
console.log(" Opa! Esse não é meu pedido!")
} */