//Acesse o elemento elementoOndeVoceEsta .

//document.getElementById("elementoOndeVoceEsta")

//document.getElementById("elementoOndeVoceEsta").parentNode

//Crie um irmão para elementoOndeVoceEsta .

//crie um filho para elementoOndeVoceEsta .

//Crie um filho para primeiroFilhoDoFilho .

//A partir desse filho criado, acesse terceiroFilho .


let ondeEstaLocal = [
    'casa',
    'ilha',
    'sitio',
];

let ondeEstaLista = document.querySelector('#elementoOndeVoceEsta');
// recuperei a lista ( elemento onde você está)

for (let i = 0; i < ondeEstaLocal.length; i += 1){
    let novoIrmao = ondeEstaLocal[i];

    let ondeEstaLocals = document.createElement("li");
    ondeEstaLocals.innerText = novoIrmao;

    ondeEstaLocal.appendChild(ondeEstaLocals);

}