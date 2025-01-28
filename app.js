alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
let chute = prompt('Escolha um número entre 1 a 10');

if (numeroSecreto == chute) {
    console.log(`isso aí! Você descobriu o número secreto ${numeroSecreto}`);

} else {
    alert('Você errou! O número secreto era ' + numeroSecreto + ', mas foi digitado o número ' + chute)
}