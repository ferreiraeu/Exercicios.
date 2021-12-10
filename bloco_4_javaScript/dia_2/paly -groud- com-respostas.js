// Desafio 1 ok

function compareTrue(resposta1, resposta2) {
    if (resposta1 === true && resposta2 === true) {
      return true;
    }
    return false;
  }
  
  // console.log(compareTrue(true, false))
  
  //  Desafio 2 ok
  function calcArea(base, height) {
    return (base * height) / 2;
  } // console.log(calcArea(5, 10));
  
  // Desafio 3 ok
  function splitSentence(string) {
    let conversor = string.split(' ');
    return conversor;
  }
  
  // Desafio 4
  function concatName(array) {
    return array[array.length -1] + ', ' + array[0]
  }
  
  
  // Desafio 5
  function footballPoints(wins, ties) {
    let points = wins * 3 + ties;
    return points;
  }
  
  // Desafio 6
  function highestCount() {
    // seu código aqui
  }
  
  // Desafio 7
    function catAndMouse(mouse, cat1, cat2) {
      if (posit1 (mouse - cat1) < posit2 (mouse - cat2)) {
        return 'cat1';
      }
      if (posit1(mouse - cat1) > posit (mouse - cat2)) {
        return 'cat2';
      }
      
    }
  
  // Desafio 8  ok
  function fizzBuzz(numbers) {
      let divisiveis = []
     
       for (let key in numbers) {
         if (numbers[key] % 3 === 0 && numbers[key] % 5 === 0) {
           divisiveis.push('fizzBuzz')
         } else if (numbers[key] % 3 === 0) {
           divisiveis.push('fizz')
         } else if (numbers[key] % 5 === 0) {
           divisiveis.push('buzz')
         } else {
           divisiveis.push('bug!')
         }
       }
       return divisiveis
  }
  
  // Desafio 9
  function encode() {
    // seu código aqui
  }
  function decode() {
    // seu código aqui
  }
  
  module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
  };
  