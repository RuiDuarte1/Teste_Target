var n1 = 0
var n2 = 1
var n3 = 0

var numero = 21
while(numero > n3){
    n3 = n1 + n2
    n1 = n2
    n2 = n3
}
if(numero === 0 || numero === 1){
    console.log('O número faz parte da sequência')
}else if(numero === n3){
    console.log('O número faz parte da sequência')
}else{
    console.log('O número não faz parte da sequência')
}