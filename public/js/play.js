try{
    window.Dados = {
        imagem:document.querySelector(".card__img"),
        artista:document.querySelector(".card__info h5"),
        titulo:document.querySelector(".card__info p"),
        musica:document.querySelector("audio"),
        masterPlay:audio,
        Play:{},
        index:0,
        start(){
            this.Play = this.masterPlay[this.index];
            this.imagem.style.background=`url('${this.Play.imagem}') no-repeat center center/cover`
            this.artista.innerText = this.Play.artista;
            this.titulo.innerText = this.Play.titulo;
            this.musica.src = wai(this.Play.musica);
            alert(this.Play.artista)
            this.musica.addEventListener("ended", this.next)
         },
        next(){
            this.index++
            this.musica.src =  wai(this.masterPlay[1].musica)
           // alert("oi") 

        }
    }
}catch(err){
    alert(err)
}
