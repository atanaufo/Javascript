// Loop (Laços):
// No Javascript, possui 5 formas.
// Basicamente são a mesma coisa, porém, dependerá do cenário
// que serão utilizados.

// 1. For
// 2. While
// 3. Do.. while 
// 4. For.. In
// 5. For.. of



'1. Utilizando For.'
// Cenário 1:
// Retornar a mensagem 'Aprendendo javascript' 05 vezes.

// for(let i = 0; i < 5; i++){
//     console.log('Aprendendo javascript ', i);
// };

// Cenário 2:
// imprimir os valores impares menores igual a 5.

// for(let i = 1; i <=5000; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

'2. While loop'
// Diferença declarar a variável do indice fora do loop.

// Cenário 1:
// Retornar a variável 10 vezes.

// let i = 1;
//     while(i <= 10){
//         console.log(i);
//         i++;
//     };

'3. Do..While'
// Praticamente mesmo que o While loop. Somente que inverso.
// Na prática não muito usavel na programação.
// Pois necessáriamente deverá ser executado uma vez e depois
// verificará a condição explicita.

// let i = 1;
// do {
//     console.log('Digitando', i);
//     i++;

// }while(i <= 10);

'4. For.. In'
// Para interação em objetos e ou propriedade de arrays.

// Cenário 1:
    // const pessoa = {
    //     nome : 'Atanaufo',
    //     idade: 41
    // };

    // for(let chave in pessoa){
    //     console.log(chave,pessoa['nome']);
    // };


// Cenário 2:
// const cores = ['Vermelho','Azul','Verde'];

//     for(let indice in cores){
//         console.log(indice, cores[indice]);
//     }

'5. For.. of'
const cores = ['Vermelho','Azul','Verde'];
for(let cor of cores){
    console.log(cor);
}


















