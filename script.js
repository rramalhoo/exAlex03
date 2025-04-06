function Parcelamento() {
    let valorVenda = parseFloat(document.getElementById("valorVenda").value)
    let parcelamento = document.getElementById("OpnParcelamento").value
    let msg = ''
    let valorFinal = valorVenda

    if (parcelamento === "aVista") {
        valorFinal = valorVenda * 0.9
        msg = `O valor à vista com 10% de desconto é: R$ ${valorFinal}`
    } else if (parcelamento === "prazo30") {
        valorFinal = valorVenda * 0.95
        msg = `O valor a prazo de 30 dias com 5% de desconto é: R$ ${valorFinal}`
    } else if (parcelamento === "prazo60") {
        msg = `O valor a prazo de 60 dias é: R$ ${valorFinal}`
    } else if (parcelamento === "prazo90") {
        valorFinal = valorVenda * 1.05
        msg = `O valor a prazo de 90 dias com acréscimo de 5% é: R$ ${valorFinal}`
    } else if (parcelamento === "debito") {
        valorFinal = valorVenda * 0.95
        msg = `O valor com débito com 5% de desconto é: R$ ${valorFinal}`
    } else if (parcelamento === "credito") {
        valorFinal = valorVenda * 0.93
        msg = `O valor com crédito com 7% de desconto é: R$ ${valorFinal}`
    }

    document.getElementById("resposta").innerHTML = msg
}

function Estacao(){
    let estacao = document.getElementById("estacao").value
    let msg = ''

    if(estacao === "verao"){
        msg = 'São os meses: Janeiro, Fevereiro, Março'
    }else if (estacao === "outono"){
        msg = 'São os meses: Abril, Maio, Junho'
    }else if (estacao === "inverno"){
        msg = 'São os meses: Julho, Agosto, Setembro'
    }else if (estacao === "primavera"){
        msg = 'São os meses: Outubro, Novembro, Dezembro'
    }

    document.getElementById("resposta2").innerHTML = msg
}