const btnAdd = document.getElementById('add-obj');
const btnSave = document.getElementById('botao-salvar');
const btnLoad = document.getElementById('botao-load');

carregaBtns();


btnAdd.addEventListener('click', () => {

    const containerForm = document.getElementById("form");

    let nomeContador = prompt('Digite o nome do contador');

    containerForm.innerHTML+= `            
    <div class="objeto">
        <h1 class="objeto-titulo" id= "objeto">${nomeContador}</h1>
        <div class="controle">
            <button type="button"class="objeto-botoes" id="botao-negativo">-</button>
            <input readonly class="objeto-quantidade" id="quantidade" value="0">
            <button type="button" class="objeto-botoes" id="botao-positivo">+</button>
        </div>
    </div> 
`
    carregaBtns()

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

