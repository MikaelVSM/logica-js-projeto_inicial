alert('Boas vindas ao jogo do número secreto');

//Console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 a 10');
console.log('Valor do chute: ', chute);

let numeroSecreto = 9;

//Console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (numeroSecreto == chute) {
   alert('Acertou!');

} else {
    alert('Você errou! O número secreto era ' + numeroSecreto + ', mas foi digitado o número ' + chute)
}