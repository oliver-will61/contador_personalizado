const btnNegativo = document.getElementById('botao-negativo');
const btnPostivo = document.getElementById('botao-positivo');

const objetoQuantidade = document.getElementById('quantidade')

btnPostivo.addEventListener('click', () => {
    objetoQuantidade.value = parseFloat(objetoQuantidade.value) +1
})

btnNegativo.addEventListener('click', ()=> {
    objetoQuantidade.value = parseFloat(objetoQuantidade.value) -1
})