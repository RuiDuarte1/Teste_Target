const inverter = (string) => {
    let x = ''
    for(let i = string.length -1; i >= 0; i--){
        x += string[i]
    }
    return x
}

console.log(inverter('target sistemas'))