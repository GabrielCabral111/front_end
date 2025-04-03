function abrir_moral(){
    let modal = document.querySelector(".modal")
    let janeles = document.querySelector(".janeles")
    let imagem = document.querySelector("img")

    modal.style.visibility="visible"
    janeles.style.visibility="visible"
    imagem.style.visibility="visible"
}

function fechar_moral(){
    let modal = document.querySelector(".modal")
    let janeles = document.querySelector(".janeles")
    let imagem = document.querySelector("img")

    modal.style.visibility="hidden"
    janeles.style.visibility="hidden"
    imagem.style.visibility="hidden"
}