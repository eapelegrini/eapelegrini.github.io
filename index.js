/*DATA SISTEMA*/{
var nnow = new Date()
var dnow = nnow.getDate()
var mnow = nnow.getMonth()+1
var ynow = nnow.getFullYear()
}

/*DATA SELECIONADA*/

   function ok(){
    var nsel = document.getElementById('hsel').value;
    var osel = new Date(nsel);
    var dsel = osel.getDate() +1
    var msel = osel.getMonth()+1
    var ysel = osel.getFullYear()
    var idade = (((ynow*12+mnow)-(ysel*12+msel))/12).toFixed(0)
    var sign = ''
    var sexs = document.getElementsByName('radsex')
    var gens = ''
    var img = document.createElement('img')
    var res = document.getElementById('res')
    img.setAttribute('id', 'foto')
    if((msel == 12 && dsel >= 22)||(msel == 1 && dsel <= 20)){
        var sign = 'Capricórnio'
    } else if((msel == 1 && dsel >= 21)||(msel == 2 && dsel <= 19)){
        var sign = 'Aquário'
    } else if((msel == 2 && dsel >= 20)||(msel == 3 && dsel <= 20)){
        var sign = 'Peixes'
    } else if((msel == 3 && dsel >= 21)||(msel == 4 && dsel <= 20)){
        var sign = 'Áries'
    } else if((msel == 4 && dsel >= 21)||(msel == 5 && dsel <= 20)){
        var sign = 'Touro'
    } else if((msel == 5 && dsel >= 21)||(msel == 6 && dsel <= 20)){
        var sign = 'Gêmeos'
    } else if((msel == 6 && dsel >= 21)||(msel == 7 && dsel <= 22)){
        var sign = 'Câncer'
    } else if((msel == 7 && dsel >= 23)||(msel == 8 && dsel <= 22)){
        var sign = 'Leão'
    } else if((msel == 8 && dsel >= 23)||(msel == 9 && dsel <= 22)){
        var sign = 'Virgem'
    } else if((msel == 9 && dsel >= 23)||(msel == 10 && dsel <= 22)){
        var sign = 'Libra'
    } else if((msel == 10 && dsel >= 23)||(msel == 11 && dsel <= 22)){
        var sign = 'Escorpião'
    } else if((msel == 11 && dsel >= 23)||(msel == 12 && dsel <= 21)){
        var sign = 'Sagitário'
    } //SIGNO
    if(osel >= nnow || osel.value >= nnow.value){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{ 
        if(sexs[0].checked){
        var gens = 'Homem'
        document.body.style.backgroundColor = 'DodgerBlue'
        document.getElementById("hsel").style.backgroundColor = "DodgerBlue";
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
    } else if(sexs[1].checked){
        var gens = 'Mulher'
        document.body.style.backgroundColor = 'HotPink'
        document.getElementById("hsel").style.backgroundColor = "HotPink";
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
    res.innerHTML = `Detectamos que você é <strong>${gens}</strong>, do signo de <strong>${sign}</strong> com <strong>${idade}</strong> anos.</br>`
    res.appendChild(img)
    }       
}
   

