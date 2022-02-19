// Simulador de Radar.
// Velocidade máxima de até 70
// a cada 5km acima do limite você perde um 1 ponto na carteira.
// Usando a função: Math.Floor() para arrendodamento decimal.
// Caso os pontos sejam maior que 12 pontos a carteira é suspendida.


verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;

    if(velocidade <= velocidadeMaxima)
        console.log('Ok');
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima)/ KmPorPonto));
        if (pontos >= 12) {
            console.log('Carteira Suspensa');
        }
        else{
            console.log('Pontos: ', pontos);
        }
       
    }

}


