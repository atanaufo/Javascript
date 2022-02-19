'Operadores:'

'Operadores Aritméticos (matemáticos):  + - * / **     '
// let salario = 100;
    // console.log(salario);
    // console.log(salario + salario);
    // console.log(salario - salario);
    // console.log(salario * salario);
    // console.log(salario / salario);
    // console.log(salario ** salario);
    // console.log(5 ** 5);

    'Operador de Incremento de 1: ++  ou Redução de 1: --'
    // let idade = 18;

    // // console.log(idade++);
    // // console.log(idade);
    // // Caso necessite que o incremento seja realizado antes e já retornar o resultado na variável: ++idade ou --idade
    // console.log(++idade);
    // console.log(--idade);


'Operadores de Atribuição: =  ou atribuição com operadores matemáticos: += -= *='
    // let valorTeclado = 100; // Isso é uma atribuição.
    // valorTeclado += valorTeclado;
    // console.log(valorTeclado);

    // let valorTeclado = 50;
    // valorTeclado *= valorTeclado;
    // console.log(valorTeclado);


'Operadores de Comparação:'
    'Operadores de igualdade:'
     'Igualdade estrita: mesmo valor na especificação.'
    // console.log(1 == 1); // Apenas compara os valores.
    // console.log('1' === 1); // Além de comparar os valores, comparará os tipos.

    'Igualdade solta:'
    // console.log(1 == 1);
    // console.log('1' == 1); // Irá converter para atender a comparação, porém não recomendável seu uso.


'Operador Ternário:'
    // Para realizar condições:
    // Caso exemplo: Cliente maior que 100 pontos é premium, caso contrário será comum.
    // let pontos = 100;
    // let tipo = pontos > 100 ? 'premium' : 'comum';
    // console.log(tipo);


'Operadores Lógicos:'
    'Operador Lógico E : &&'
    // Retornará TRUE se ambas condições forem True.
    //console.log(true && true);
        // let maiorIdade = true;
        // let possuiCarteiraDeTrabalho = true;
        // let podeAplicar = maiorIdade && possuiCarteiraDeTrabalho;
        // console.log('Pode aplicar? ', podeAplicar);

    'Operador Lógico Ou: ||'
    // Retornará TRUE se uma das condições forem True.
    //console.log(true || false);
        // let maiorIdade = true;
        // let possuiCarteiraDeTrabalho = false;
        // let podeAplicar = maiorIdade || possuiCarteiraDeTrabalho;
        // console.log('Pode aplicar? ', podeAplicar);

    'Operador NOT (Negação) : !'
        // let maiorIdade = true;
        // let possuiCarteiraDeTrabalho = false;
        // let podeAplicar = maiorIdade && possuiCarteiraDeTrabalho;
        // let candidatoRecusado = !podeAplicar;
        //     console.log('Canditado Recusado ? ', candidatoRecusado);


    'Comparações não Booleanos:'

    // Valores Falsy: Basicamente são os valores:
    // undefined, null, 0, false, '', NaN - Not a number


    // Valores Truthy: Basicamente são os valores contrário os valores Falsy.
    
    let corPersonalizada = 'Vermelho';
    let corPadrao = 'Azul';
    let corPerfil = corPersonalizada || corPadrao;
        console.log(corPerfil);

'Operadores Bitwise:'