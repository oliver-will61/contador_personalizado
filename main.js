const btnAdd = document.getElementById('add-obj');
const btnSave = document.getElementById('botao-salvar');
const btnLoad = document.getElementById('botao-load');

carregaBtns();

class Contador {
    constructor (nomeContador, quantidadeContador){
        this.nome = nomeContador
        this.quantidade = quantidadeContador
    }
}

const contadores = []

btnSave.addEventListener('click', () => {
    const confirmar = confirm("Tem certeza que deseja salvar as alterações?")
    if(confirmar == false) {
        alert('Salvamento cancelado!')
    } else {

        localStorage.setItem('contadores', JSON.stringify(contadores));
        alert('Os dados foram salvos!')
    }
})


btnAdd.addEventListener('click', () => {

    const nomeContador = prompt('Digite o nome do contador');

    if (nomeContador == null) {
        alert('Ação cancelada!');
    }else {

        const valorContador = 0
        const containerForm = document.getElementById("form");

        const contador = new Contador (nomeContador, valorContador)
        contadores.push(contador);

        containerForm.innerHTML+= `            
        <div class="objeto">
            <h1 class="objeto-titulo" id= "objeto">${contador.nome}</h1>
            <div class="controle">
                <button type="button"class="objeto-botoes" id="botao-negativo">-</button>
                <input readonly class="objeto-quantidade" id="quantidade" value="${contador.quantidade}">
                <button type="button" class="objeto-botoes" id="botao-positivo">+</button>
            </div>
        </div> 
    `
        carregaBtns()
    }
})

function carregaBtns() {
     btnNegativo = document.querySelectorAll('#botao-negativo');
     btnPostivo = document.querySelectorAll('#botao-positivo');

     btnPostivo.forEach((botao)=> {
        botao.addEventListener('click', (event) => {
           let objetoQuantidade = event.currentTarget.parentElement.querySelector('#quantidade')
           let objetoNome = botao.parentNode.parentElement.querySelector('#objeto').innerHTML
           console.log(objetoNome)
           objetoQuantidade.value = parseFloat(objetoQuantidade.value) +1
           console.log(contadores)
        })
    }) 

    btnNegativo.forEach((botao)=>{
        botao.addEventListener('click', (event)=> {
            let objetoQuantidade = event.currentTarget.parentElement.querySelector('#quantidade');
            objetoQuantidade.value = parseFloat(objetoQuantidade.value) -1
        })
    })
}

