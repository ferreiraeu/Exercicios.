console.log(document.getElementsByClassName("paragrafo"))


// vamos criar um objeto 
// depois criar um for para mudar todos os nomes 
let todosParagrafos = document.getElementsByClassName("paragrafo")

for (let i = 0; i < todosParagrafos.length; i += 1){
    todosParagrafos[i].innerText = "Mudando de nome" 
}


for (let i = 0; i < todosParagrafos.length; i += 1){
    todosParagrafos[0].innerText = "Mudando de nome individual da posição 0" 
}

