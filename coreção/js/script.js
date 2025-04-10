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