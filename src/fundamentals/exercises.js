function validadorIdade(age) {
    return message = age >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
}
console.log(validadorIdade(18));

function validadorParidade(num) {
    return message = num % 2 === 0 ? "O número é par." : "O número é ímpar.";
}
console.log(validadorParidade(3));

function aplicarDesconto(clienteFidelidade) {
    return message3 = clienteFidelidade ? "Desconto de 10% aplicado." : "Desconto de 5% aplicado.";
}
console.log(aplicarDesconto(true));