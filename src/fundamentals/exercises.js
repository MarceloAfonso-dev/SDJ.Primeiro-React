function validadorIdade(age) {
    return message = age >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
}
//console.log(validadorIdade(18));

function validadorParidade(num) {
    return message = num % 2 === 0 ? "O número é par." : "O número é ímpar.";
}
//console.log(validadorParidade(3));

function aplicarDesconto(clienteFidelidade) {
    return message3 = clienteFidelidade ? "Desconto de 10% aplicado." : "Desconto de 5% aplicado.";
}
//console.log(aplicarDesconto(true));

function validarIdadeIf(age) {
    if (age >= 18) {
        return "Você é maior de idade.";
    } else if (age >= 0) {
        return "Você é menor de idade.";
    } else {
        return "Idade inválida.";
    }
}
console.log(validarIdadeIf(0));

function validadorNota(nota) {
    if (nota >= 7){
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}
console.log(validadorNota(7));

function verificaValor(num) {
    if (num > 0) {
        return "Valor positivo";
    } else if (num < 0) {
        return "Valor negativo";
    } else {
        return "Valor neutro";
    }
}
console.log(verificaValor(0));