let pessoas = [
    { nome: 'Alice', idade: 21 },
    { nome: 'Max', idade: 20 },
    { nome: 'Jane', idade: 20 }
  ];
  
  function agruparPor(objetoArray, propriedade) {
    return objetoArray.reduce(function (acc, obj) {
      let key = obj[propriedade];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }


let grupodePessoas = agruparPor(pessoas, 'idade');

console.log(grupodePessoas);