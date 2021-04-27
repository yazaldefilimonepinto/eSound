const togle = document.querySelector(".toggle");
const html = document.querySelector("html");
const gle = document.querySelector(".gle");
const voltar = document.querySelector(".voltar");
const sons = document.querySelector(".Sons");
const musica = document.querySelectorAll(".musica");
togle.addEventListener("click", () => {
    gle.classList.toggle("active")
    togle.style.backgroundColor="#AACFCF";
    html.classList.toggle("root")

})

sons.addEventListener("click", () => {
    document.querySelector(".cardLista").style.display="block";
})
voltar.addEventListener("click", () => {
    document.querySelector(".cardLista").style.display="none";
})

    musica.forEach((intem ,index)=> {
        intem.addEventListener("click",() => {
            musica[index].classList.add("cor");
        })
    })
if(musica[0].classList == "musica cor"& musica[1].classList == "musica cor"){
    musica[0].classList.remove("cor")
}
if(musica[1].classList == "musica cor"& musica[0].classList == "musica cor"){
    musica[1].classList.remove("cor")
}
if(musica[1].classList == "musica cor"& musica[2].classList == "musica cor"){
    musica[1].classList.remove("cor")
}
if(musica[2].classList == "musica cor"& musica[1].classList == "musica cor"){
    musica[2].classList.remove("cor")
}
if(musica[2].classList == "musica cor"& musica[3].classList == "musica cor"){
    musica[2].classList.remove("cor")
}
if(musica[3].classList == "musica cor"& musica[2].classList == "musica cor"){
    musica[3].classList.remove("cor")
}
