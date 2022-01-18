/* Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"
Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam;

 */
/* const nota = 81;

if (nota > 80 ) {
    console.log('aprovado');
} else if ( nota > 60 && nota <= 80){
    console.log('recuperação');
} else{
    console.log('reprovado');
} */

//================================================================================ && and E

/* 
Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
Implemente condicionais para que:
Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
Agora imprima a variável message fora das suas condições. */

/* 
const horaDoDia = 51;
let mensagem = [];

if ( horaDoDia <= 10){
    mensagem = ["Não deveríamos comer nada, é hora de dormir"]
    console.log(mensagem);
} else if ( horaDoDia >= 10 && horaDoDia <= 50) {
    mensagem = ["Rango da noite, vamos jantar :D"]
    console.log(mensagem);

} else {
    mensagem = [" Hora de não fazer Nada !!!"]
    console.log(mensagem);
} */

//========================================================================= or || ou 

/* 
Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
Implemente condicionais para que:
Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :). */

 let diasDaSemana = " domingo";
 
if(diasDaSemana === 'segunda-feira' || diasDaSemana === 'terça-feira' || diasDaSemana === 'quarta-feira' || diasDaSemana === 'quinta-feira' || diasDaSemana === 'sexta-feira') {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else{ 
    console.log("FINALMENTE, descanso merecido UwU");
}




 //============================================================================= NOT 

/* 
 Se você executar esse código, vai perceber que o valor impresso é o oposto do anterior. 🤔
Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false .
 */

