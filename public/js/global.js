try{
    window.wai = function(files){
        return `public/players/${files}`
    }
    window.mtmAudio = (files) => {
        const menutos = Math.floor(files/60);
        const segundos = Math.floor(files % 60);
        return `${("0"+ menutos).slice(-2)}:${("0"+segundos).slice(-2)}`
    }
    window.addEventListener("load", Dados.start());
}catch(erro){
    alert("Erro Global.js" + erro)
}
