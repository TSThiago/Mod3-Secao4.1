// Ex 1:

let tabuadaNum = []
let tabuadaProximos = []

console.log(calcularTabuada(3))

function calcularTabuada(numero : number) : boolean {
    if (!Number.isInteger(numero)) {
        return false
    } else {
        for (let index : number = 1; index < 11; index++) {
            tabuadaNum.push(numero * index)
            tabuadaProximos.push((numero + 1) * index)
            tabuadaProximos.push((numero + 2) * index)
        }
        return true
    }
}

// Ex 2:

let array : number[][] = [[10, 0], [3, 5], [5, 8]]

console.log(pontosDeOnibus(array))

function pontosDeOnibus(array : number[][]) : number | boolean {
    let pessoasNoBusão = 0
    let inteiro : boolean = true
    array.forEach((x : number[]) => { 
        pessoasNoBusão = pessoasNoBusão + x[0] - x[1]
        if(!Number.isInteger(x[0])|| !Number.isInteger(x[1])){
            inteiro = false
        } 
    })
    if (pessoasNoBusão < 0 || !inteiro){
        return false
    } else {
        return pessoasNoBusão
    }
}

// Ex 3: 

// Array alfabeto foi feito para auxilio

const alfabeto : string[] = ['',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let bingo : number[] = [2, 9, 14, 7, 1, 1, 1, 1, 1, 1]

console.log(definirVencedor(bingo))

function definirVencedor(array : number[]) : string{
    let B : boolean= array.some((x : number) => x === 2)
    let I : boolean = array.some((x : number) => x === 9)
    let N : boolean = array.some((x : number) => x === 14)
    let G : boolean = array.some((x : number) => x === 7)
    let O : boolean = array.some((x : number) => x === 15)

    if(B === false || I === false || N === false || G === false || O === false){
        return "PERDEU"
    }else{
        return "GANHOU"
    }
}