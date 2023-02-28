let sp = 67.83643
let rj = 36.67866
let mg = 29.22988
let es = 27.16548
let outros = 19.84953

const total = sp + rj + mg + es + outros

percentSp = (sp/total) * 100
percentRj = (rj/total) * 100
percentMg = (mg/total) * 100
percentEs = (es/total) * 100
percentOutros = (outros/total) * 100

console.log(`SP: ${percentSp.toFixed(1)}%`)
console.log(`RJ: ${percentRj.toFixed(1)}%`)
console.log(`MG: ${percentMg.toFixed(1)}%`)
console.log(`ES: ${percentEs.toFixed(1)}%`)
console.log(`OUTROS: ${percentOutros.toFixed(1)}%`)