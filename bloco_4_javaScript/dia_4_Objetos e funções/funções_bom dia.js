
/**função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: "Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.*/




let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo