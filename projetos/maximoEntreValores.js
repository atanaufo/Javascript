// Escreva uma função que usa 2 números 
// e retornar o maior entre eles.

// let valorMaior = max(10,9);
// console.log(valorMaior);

// function max(numero1,numero2){
//     if(numero1 > numero2)
//     return numero1;
//     else return numero2;   
// }

// Temos outro jeito que é usado o Operador Ternário:
let valorMaior = max(10,9);
console.log(valorMaior);

function max(numero1,numero2){
    return numero1 > numero2 ? numero1 : numero2;
}
