var slideIndex =4;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides (n){
    var i;
    var slides = document.getElementsByClassName("slider-link");
    var bullets = document.getElementsByClassName("bullet");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length;i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < bullets.length;i++){
        bullets[i].className = bullets[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";
    bullets[slideIndex-1].className += " active";
}


const modal = document.querySelector(".js-modal");
const open = document.querySelector(".js-modal-open")
const close = document.querySelector(".js-modal-close")
const modalContainer= document.querySelector(".js-modal-container")
function showmodal (){
    modal.classList.add('open')
}
function hidemodal(){
    modal.classList.remove('open')
} 
open.addEventListener('click',showmodal)
close.addEventListener('click',hidemodal)
modal.addEventListener('click',hidemodal)
modalContainer.addEventListener('click',function (event) {
    event.stopPropagation()
   })