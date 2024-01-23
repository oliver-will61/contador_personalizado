const btnAdd = document.getElementById('add-obj');
const btnSave = document.getElementById('botao-salvar');
const btnLoad = document.getElementById('botao-load');

carregaBtns();


btnAdd.addEventListener('click', () => {

    const nomeContador = prompt('Digite o nome do contador');

    if (nomeContador == null) {
        alert('Ação cancelada!');
    }else {

        const valorContador = 0
        const containerForm = document.getElementById("form");

        class Contador {
            constructor (nomeContador, quantidadeContador){
                this.nome = nomeContador
                this.quantidade = quantidadeContador
            }
        }

        const contador = new Contador (nomeContador, valorContador)
        console.log(contador);

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
           objetoQuantidade.value = parseFloat(objetoQuantidade.value) +1
        })
    }) 

    btnNegativo.forEach((botao)=>{
        botao.addEventListener('click', (event)=> {
            let objetoQuantidade = event.currentTarget.parentElement.querySelector('#quantidade');
            objetoQuantidade.value = parseFloat(objetoQuantidade.value) -1
        })
    })
}

