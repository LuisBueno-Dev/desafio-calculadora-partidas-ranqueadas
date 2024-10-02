let vitoria = 85
let derrota = 5
let ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

console.log("Os ranks atuais são: ")
for (let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}

verificacaoDeRank(vitoria, derrota);


function verificacaoDeRank(vitoria, derrota) {
    let rank = ""
    let saldoVitorias = vitoria - derrota
    if (saldoVitorias <= 10){
        rank = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20){
        rank = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50){
        rank = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80){
        rank = "Ouro"
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90){
        rank = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100){
        rank = "Lendário"
    } else if (saldoVitorias >= 101){
        rank = "Imortal"
    }
    console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível " + rank)
}



