function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 4){
                //bb
                img.setAttribute('src', 'homembebe.png')
            } else if (idade < 12){
                //crianca
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'homemadolescente.png')
            } else if (idade < 35){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else if (idade < 60){
                //maduro
                img.setAttribute('src', 'homemmaduro.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 4){
                //bb
                img.setAttribute('src', 'mulherbebe.png')
            } else if (idade < 12){
                //crianca
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'mulheradolescente.png')
            } else if (idade < 35){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else if (idade < 60){
                //maduro
                img.setAttribute('src', 'mulhermadura.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}