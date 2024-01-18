const btnNegativo = document.getElementById('botao-negativo');
const btnPostivo = document.getElementById('botao-positivo');
const objetoQuantidade = document.getElementById('quantidade');

const btnAdd = document.getElementById('add-obj');
const btnSave = document.getElementById('botao-salvar');
const btnLoad = document.getElementById('botao-load');


btnPostivo.addEventListener('click', () => {
    objetoQuantidade.value = parseFloat(objetoQuantidade.value) +1
})

btnNegativo.addEventListener('click', ()=> {
    objetoQuantidade.value = parseFloat(objetoQuantidade.value) -1
})