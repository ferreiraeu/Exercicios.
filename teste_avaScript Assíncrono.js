/* setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
  }, 2000);
  
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque') foram declarados antes das etapas 1 , 2 e 3 , mesmo assim o retorno das chamadas só ocorre ao final
 */
/* 
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
pushNumber(numbers, 3);

console.log(numbers);
 */

/* const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]
 */

/* const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);  */// chamo uma função para que o log espere o tempo do pusNunbers 1.
/* função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. Ou seja, o array recebe primeiro o 2 , depois o 3 , e após os 3 segundos do setTimeout , ele recebe o 1 . */
//======================================================================================

/* implementação de uma callback */
/* const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const renda = 1000;

  const despesaMensal = (renda, despesas, callback) => {

    const despesaTotal = callback(despesas);
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };

  const somaDespesas = (despesas) => {
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
  };
  
  // acc é a sigla para accumulator (acumulador)
  // curr é a sigla para current (valor atual)
  
  despesaMensal(renda, despesas, somaDespesas); */

  //==========================================================

// Declaramos nossa variável de despesas
const despesas = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  // Declaramos nossa renda
  const renda = 1000;
  
  const despesaMensal = (renda, despesas, callback) => {
    // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
    // que vai receber nosso parâmetro/variável "despesas"
    const despesaTotal = callback(despesas);
    // Definimos nosso saldo final, que é nossa renda - nossa despesa total
    const saldoFinal = renda - despesaTotal;
  
    console.log(`Balanço do mês:
      Recebido: R$${renda},00
      Gasto: R$${despesaTotal},00
      Saldo: R$${saldoFinal},00 `);
  };
  
  // Definimos nossa função que será passada como parâmetro
  // essa função recebe o parâmetro despesas a partir da função principal despesaMensal
  const somaDespesas = (despesas) => {
    // Separamos cada item do nosso array de despesas
    // e fazemos um reduce para somar os valores
    const custoItem = despesas.map((item) => Object.values(item));
    const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
    return despesaTotal;
  };
  
  // Executamos a função principal com as variáveis renda, despesas
  // e a nossa função somaDespesas
  // callback = somaDespesas
  despesaMensal(renda, despesas, somaDespesas);
  
  // Balanço do mês:
  //     Recebido: R$1000,00
  //     Gasto: R$459,00
  //     Saldo: R$541,00