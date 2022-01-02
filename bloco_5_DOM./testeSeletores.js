//function queroCafe() {
//    console.log('quero cafeee');
//}

//
//window.onload = queroCafe; 

// não colocar ()

//window.onload = function (){
//    console.log(' teste de final do wiindow. onload ');
//}
// criar uma função já no windons.onload

// criei uma função apenas para visualizar no DOOm

//queroCafe();

// guardei minha função em uma variavel
 
//add um evento ao finalizar o carregamento da pagina ( o window,onload faz isso)

window.onload = function () {
let botao = document.getElementById('Inicia-corrida-Botao')

//são carregados ao final da pagina ser carregada
    let carro1 = document.querySelector('.carro1');
    console.log(carro1);

    carro1.style.marginLeft ='0px'

//são carregados ao final da pagina ser carregada
    let carro2 = document.querySelector('.carro2');
    console.log(carro1);
    //temos que colcoar como referencia a posição 0 para poder as posições logo abaixo poderam sair no evente
    carro2.style.marginLeft ='0px'




//add um evento 
botao.addEventListener('click', function (event){ 
    console.log(event.target)
    //Quando eu clicar no botão mosta que o botão foi clicado.

    let position1 = parseInt(carro1.style.marginLeft);
    console.log(position1);
    //converto uma string em numero usando ( aprseInt)
    carro1.style.marginLeft = (position1 + Math.random() * 100) + 'px';
    //posição1 = 0 + 50 = 50 + px resultado ( 50 px)
    //posição1 = 50 pois o parseInt tira o px 
    //posição1 = 50 + 50 + 100 + px resultado (100 px)



    // criamos o evento para o carro 2

    let position2 = parseInt(carro2.style.marginLeft);
    console.log(position2);
    //converto uma string em numero usando ( aprseInt)
    carro2.style.marginLeft = (position2 + Math.random() * 100) + 'px';
    //posição1 = 0 + 50 = 50 + px resultado ( 50 px)
    //posição1 = 50 pois o parseInt tira o px 
    //posição1 = 50 + 50 + 100 + px resultado (100 px

    // agora criamos o elemento que vai criar numeros aleatorios para os carros não andarem juntos seria como uma velocidade aleatoria entre 0 e 100 ( Math.random())


  // window.innerWidth e informa o tamanho da minha janela do navegador.

  if( parseInt(carro1.style.marginLeft) > window.innerWidth){
      alert("carro 1 ganhou ");
  }

  if( parseInt(carro2.style.marginLeft) > window.innerWidth){
    alert("carro 2 ganhou ");


}

// repare que eu coloquei o parseInt pois eu peguei a posição do carro1 de acordo com a sua posição da margem, se eu pego apenas a posição ele fica com a posição inicial e não a final.

})

}


//pegar o carro que quero