const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function calcularSaldo(varVitorias, varDerrotas) {
    return varVitorias - varDerrotas;
}

function calcularRank(varSaldo) {

    if (varSaldo <= 10) {
        return 'Ferro';
    } else if (varSaldo <= 20) {
        return 'Bronze';
    } else if (varSaldo <= 50) {
        return 'Prata';
    } else if (varSaldo <= 80) {
        return 'Ouro';
    } else if (varSaldo <= 90) {
        return 'Diamante';
    } else if (varSaldo <= 100) {
        return 'Lendário';
    } else {
        return 'Imortal';
    }
}

readline.question('Digite o número de vitórias: ', (vitoriasInt) => {
    readline.question('Digite o número de derrotas: ', (derrotasInt) => {
        const vitorias = parseInt(vitoriasInt);
        const derrotas = parseInt(derrotasInt);

        if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
            console.log('Entrada inválida. Por favor, insira números inteiros não negativos para vitórias e derrotas.');
        } else {
            const saldo = calcularSaldo(vitorias, derrotas);
            const rank = calcularRank(saldo);
            console.log(`O Herói tem de saldo de ${saldo} está no nível de ${rank}`);
        }
        readline.close();
    })
});


