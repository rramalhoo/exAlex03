function Compra() {
    let Parcelamento = parseInt(document.getElementById("OpnParcelamento").value)
    let valorVenda = parseFloat(document.getElementById("ValorVenda").value)
    let valorFinal = valorVenda
    let msg = ''

    if (Parcelamento === 1) {
        valorFinal = valorVenda * 0.9
        msg = `O valor final à vista, com 10% de desconto`
    }
    if (Parcelamento === 2) {
        valorFinal = valorVenda
        msg = `O valor final a prazo de 30 dias, com 5% de desconto`
    }
    if (Parcelamento === 3) {
        valorFinal = valorVenda * 0.9
        msg = `O valor final a prazo de 60 dias, sem alteração`
    }
    if (Parcelamento === 4) {
        valorFinal = valorVenda * 1.05
        msg = `O valor final a prazo de 90 dias, com acréscimo de 5%`
    }
    if (Parcelamento === 5) {
        valorFinal = valorVenda * 0.95
        msg = `O valor final com débito, com 5% de desconto`
    }
    if (Parcelamento === 6) {
        valorFinal = valorVenda * 0.93
        msg = `O valor final com crédito, com 7% de desconto`
    }


    document.getElementById("resposta").innerHTML = "Opção Escolida:" + msg + "<br>Total da venda: R$" + valorFinal.toFixed(2)

}



function Estacao() {
    let estacao = parseInt(document.getElementById("estacao").value)
    let msg = ''
    let mes = ''

    if (estacao === 1) {
        mes = 'Janeiro'
        msg = 'Verão'
    }
    if (estacao === 2) {
        mes = 'Fevereiro'
        msg = 'Verão'
    }
    if (estacao === 3) {
        mes = 'Março'
        msg = 'Outono'
    }
    if (estacao === 4) {
        mes = 'Abril'
        msg = 'Outono'
    }
    if (estacao === 5) {
        mes = 'Maio'
        msg = 'Outono'
    }
    if (estacao === 6) {
        mes = 'Junho'
        msg = 'Inverno'
    }
    if (estacao === 7) {
        mes = 'Julho'
        msg = 'Inverno'
    }
    if (estacao === 8) {
        mes = 'Agosto'
        msg = 'Inverno'
    }
    if (estacao === 9) {
        mes = 'Setembro'
        msg = 'Primavera'
    }
    if (estacao === 10) {
        mes = 'Outubro'
        msg = 'Primavera'
    }
    if (estacao === 11) {
        mes = 'Novembro'
        msg = 'Primavera'
    }
    if (estacao === 12) {
        mes = 'Dezembro'
        msg = 'Verão'
    }

    document.getElementById("resposta2").innerHTML = 'O mês escolhido foi: ' + <strong>mes</strong> + '<br>' + 'E a estação do ano é: ' + <strong>msg</strong>


}