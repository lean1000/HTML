let indexSlide = 0;
function showSlide(index){
    const carrosel = document.querySelector('.carrosel')
    const totalSlides = document.querySelectorAll('.carrosel img').length

    if (index >= totalSlides) {
        indexSlide = 0
    } else if (index < 0){
        indexSlide = totalSlides - 1
    } else {
        indexSlide = index 
    }

    const offset = -indexSlide*100
    carrosel.style.transform = `translateX(${offset}%)`
}

function proximoSlide(){
    indexSlide = indexSlide + 1
    showSlide(indexSlide)
}

function voltarSlide(){
    indexSlide = indexSlide - 1
    showSlide(indexSlide)
}

setInterval(() => {
    proximoSlide()
}, 3000)