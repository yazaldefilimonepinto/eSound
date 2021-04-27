try{

    window.Dados = {
        lista:document.querySelector(".lista"),
        imagem:document.querySelector(".card__img"),
        artista:document.querySelector(".card__info h5"),
        titulo:document.querySelector(".card__info .ar"),
        buttonAudio:document.querySelector("button"),
        vulume:document.querySelector(".barra__vul"),
        texmenunt:document.querySelector(".m"),
        barraAudio:document.querySelector(".barra__input"),
        audioFim:document.querySelector(".fim"),
        audioInicio:document.querySelector(".inicio"),
        ButaoNext:document.querySelector(".Next"),
        ButaoBack:document.querySelector(".Back"),
        masterPlay:audio,
        Play:{},
        index:3,
        verAudio:false,
        createAudioElement(src){
            this.audio = new Audio(src)
        },
        audioPlay(){
            this.verAudio=true;
            this.audio.play()
            this.buttonAudio.innerText = "Pause";
        },
        audioPause(){
            this.verAudio = false;
            this.audio.pause()
            this.buttonAudio.innerText = "Play";
        },
        toolsPlay(){
            if(this.verAudio){
                this.audioPause()
            }else{
                this.audioPlay()
            }
        },
        actualUpdate(){
            this.audioInicio.innerText = mtmAudio(this.audio.currentTime);
            this.barraAudio.value = this.audio.currentTime;
        },
        loadAudio(){
            this.audio.onloadeddata = () => {
                this.audioFim.innerText = mtmAudio(this.audio.duration);
            }
        },
        controlsVolume(valor){
            this.audio.vulume = valor/100;
            this.texmenunt.innerText = `${valor}%`
        },
        controlsAudio(valor){
            this.audio.currentTime = valor;
        },
        next(){
            this.index++
           if(this.index == this.masterPlay.length){
               this.index=0;
           }
            this.str()
            this.audio.Play()
        },
        Bnext(){
            this.audio.pause()
            this.index++
           if(this.index == this.masterPlay.length){
               this.index=0;
           }
            this.str()
            this.play()
        },
        Bback(){
            this.audio.pause()
            this.index--
            if(this.index == 0){
                this.index = this.masterPlay.length;
            }
            this.str()
            this.audio.play()
        },
        update(){
            this.Play = this.masterPlay[this.index];
            this.imagem.style.background=`url('${this.Play.imagem}') no-repeat center center/cover`
            this.artista.innerText = this.Play.artista;
            this.titulo.innerText = this.Play.titulo;
            this.createAudioElement(wai(this.Play.musica));
        },
        toolUpdate(){
            this.audio.onended = () => this.next();
            this.vulume.oninput = ()=> this.controlsVolume(this.vulume.value)
            this.vulume.onchange = ()=> this.controlsVolume(this.vulume.value)
            this.barraAudio.oninput = ()=> this.controlsAudio(this.barraAudio.value)
            this.barraAudio.onchange = ()=> this.controlsAudio(this.barraAudio.value)
            this.barraAudio.max = this.audio.duration;
            this.audio.ontimeupdate = () =>  this.actualUpdate();
           this.buttonAudio.addEventListener("click", () => this.toolsPlay());
            this.ButaoNext.addEventListener("click", () => this.Bnext())
            this.ButaoBack.addEventListener("click", () => this.Bback())
            //alert(this.masterPlay.length)
        },
        getViewsFromHtml(){
            this.masterPlay.forEach((intem, index) => {
                this.lista.innerHTML += `
                <div id="${index}" class="musica">
                    <h4>${intem.artista}</h4>
                    <p>${intem.titulo}</p>
                </div>
                `
            })
        },
        setStyle(){
            const musicas = document.querySelectorAll(".musica");
            musicas.forEach((intem, index) => {
                if(index === this.index){
                    intem.style.border="5px solid #7B1FA2"
                }
                if(index !== this.index){
                    intem.style.border="5px solid #071A52"
                }
            })
        },
        activeMusictheFroEach(){
            const musicas = document.querySelectorAll(".musica");
            musicas.forEach((intem, index) => {
                intem.addEventListener("click", () => {
                    this.index = intem.id;
                    this.audio.pause();
                    this.update();
                    this.audio.play();

                })
            })
        },
        start(){
            this.getViewsFromHtml();
            this.update()
            this.toolUpdate();
            this.loadAudio();
            this.actualUpdate();
            this.activeMusictheFroEach();
            this.setStyle();
            this.toolsPlay();
        },
        str(){
            this.update()
            this.toolUpdate();
            this.loadAudio()
            this.actualUpdate();
            this.setStyle();
            this.toolsPlay();
        }
    }
}catch(err){
    alert(err)
}




