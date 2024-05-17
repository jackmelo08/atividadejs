var entrada = require('readline-sync');

for(var i = 0; i<=10; i++){
    var numero = parseInt(entrada.question('Digite um numero'));
    if(numero%2 ==0){
        console.log('numero par');
    }else{
        console.log('numero impar')
        
    }
}