//blocos com descrição dos contratos E BOTAO
var blocoPlano = document.getElementById('blocoPlano')
var blocoProduto = document.getElementById('blocoProduto')
var tax = document.getElementById('blocoTax')


//inputs de cada bloco
const inpContrato = document.getElementById('inpContrato')
blocoPlano.addEventListener('click', clicarPlano)
blocoProduto.addEventListener('click', clicarProduto)
blocoTax.addEventListener('click', clicarTax)

function clicarPlano(){
    inpContrato.value = 'PLANO'

    blocoPlano.style ='transform: scale(1.05);'+
    'font-size: 15px;'+
    'font-weight: 600;'+
    'background-color: var(--cor-hover)'

    blocoProduto.style = 
    'background-color: var(--cor-form);'
    blocoTax.style = 
    'background-color: var(--cor-form);'
}


function clicarProduto(){
    inpContrato.value = 'PRODUTO'

    blocoProduto.style ='transform: scale(1.05);'+
    'font-size: 15px;'+
    'font-weight: 600;'+
    'background-color: var(--cor-hover)'

    blocoPlano.style = 
    'background-color: var(--cor-form);'
    blocoTax.style = 
    'background-color: var(--cor-form);'
}

function clicarTax(){
    inpContrato.value = 'TAX'

    blocoTax.style ='transform: scale(1.05);'+
    'font-size: 15px;'+
    'font-weight: 600;'+
    'background-color: var(--cor-hover)'

    blocoPlano.style = 
    'background-color: var(--cor-form);'
    blocoProduto.style = 
    'background-color: var(--cor-form);'
}