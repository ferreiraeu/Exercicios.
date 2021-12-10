

//(OU ISSO OU AQUILO) OR - precisamos apenas que uma das condições sejam verdadeiras: isso ou aquiloO JavaScript 

/* computa esses valores booleanos por trás do panos, esses valores são chamados truthy e falsy, assim, quando houver um contexto booleano em alguma operação mas seus elementos não forem true ou false , esses valores serão levados em conta. */

let weekDay = "domingo";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
console.log("Oba , mais um dia de aprendizado na trybe.")
}else{ 
console.log("Finalmente ,descanso merecido");
}

//teste teste 