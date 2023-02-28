const fs = require('fs')
const caminho = __dirname + '/dados.json'

const conteudo = fs.readFileSync(caminho, 'utf-8')
//console.log(conteudo)

const obj = JSON.parse(conteudo)
//console.log(obj)

//função de menor valor desconsiderando os valores zerados
const menorValor = obj.reduce(function(prev, current){
    return prev.valor > 0 && prev.valor < current.valor? prev : current
})

//função de maior valor de faturamento
const maiorValor = obj.reduce(function(prev, current){
    return prev.valor > current.valor? prev: current
})

//número de dias em que o valor diário foi superior à média mensal.

const valorTotal = obj.reduce(getTotal, 0)
function getTotal(total, item){
    return total + item.valor
}

const media = valorTotal / 30

let counter = 0
for(let i = 0; i < obj.length; i++){
    if(obj[i].valor > media) counter++;
}

// console.log(valorTotal)
//console.log(media)
console.log(menorValor)
console.log(maiorValor)
console.log(`Número de dias de faturamento maior que a média: ${counter}`) 