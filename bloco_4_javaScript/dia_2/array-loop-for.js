//criar varios valores em uma array
/* 
let pizzas = ['frango', 'chocolate', 'calabresa','palmito,4 queijos']
 pizza[5]('peito de peru'); // adiciono um intem no array
 pizza.push('peito de peru'); //  adiciono um intem sem saber qual posição, vai para o final da fila.

 pizza..log(pizza.sort()); //organiza em ordem numerica ou alfabetico 
 console.log(pizza[1]); // apresentra qual indice que eu quero, neste caso a posição que 1.
 */


let pizza = ['frango', 'chocolate', 'calabresa','palmito','4 queijos'];// Declarei as variaveis em uma array
pizza.push('Peito de peru');
pizza.push('Gratinada'); // adiciono elemntos em uma array mesmo em loop

for (let index = 0; index < pizza.length; index += 1){
//para meu indice começa no 0 (primeira posição); indice <(maior quê) retorno todas as posições da array; somo meu indice +1 até passar por todas as posições da array
    console.log(pizza[index]);
}