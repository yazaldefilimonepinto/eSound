try{
    window.wai = function(files){
        return `public/players/${files}`
    }
    window.addEventListener("load", Dados.start());
}catch(erro){
    alert("Erro Global.js" + erro)
}
