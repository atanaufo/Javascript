// If.. Else

// Cenário:
// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18>00 : Boa tarde!
// Caso contrário: Boa noite!

// let hora = 12;

// if (hora > 6 && hora <12) {
//     console.log('Bom dia !!!');
// } 
// else if (hora >= 12 && hora <= 18 ) {
//     console.log('Boa tarde !!!');
// }
// else{
//     console.log('Boa noite !!!');
// }


// Switch .. Case

// Cenário:
// Permissões diferentes.
// Permissão podendo ser: usuário do tipo: comum, gerente e diretor.

let permissao;
permissao = 'comum';

switch (permissao){
    case 'comum' :
        console.log('Usuário comum !');
        break;
    
    case 'gerente' :
        console.log('Usuário gerente !');
        break;
    
    case 'diretor' :
        console.log('Usuário diretor !');
        break;

    default : 
    console.log('Usuário não reconhecido !');
        break;
    
};

