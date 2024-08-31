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

function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4:
            return "Quarta";
        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sábado";
        default:
            return "Dia inválido";
    }
}
console.log(diaDaSemana(1));

function verificadorDeMes(mes) {
    switch (mes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Mês inválido";
    }
}
console.log(verificadorDeMes(12));

function avaliaString(str) {
    switch (str) {
        case str.length > 5:
            return "Avançado";
        case str.length > 3:
            return "Intermédiaro";
        default:
            return "Iniciante";
    }
}
console.log(avaliaString("oi"));