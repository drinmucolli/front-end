const rightAarrow = document.querySelector(".right-arrow");
const leftAarrow = document.querySelector(".left-arrow");
const images = document.querySelectorAll(".slider-image");
const dots = document.querySelectorAll(".dot");

let counter = 0;

rightAarrow.addEventListener("click", ()=>{
    images[counter].classList.remove("active");
    images[counter].classList.add("non-active");
    dots[counter].classList.remove("dot-active");

    counter++;

    if(counter > images.length - 1) counter = 0

    images[counter].classList.remove("non-active");
    images[counter].classList.add("active");
    dots[counter].classList.add("dot-active");
})

leftAarrow.addEventListener("click",()=>{
    images[counter].classList.remove("active");
    images[counter].classList.add("not-active");
    dots[counter].classList.remove("dot-active");

    counter--;

    if(counter < 0) counter = images.length - 1;

    images[counter].classList.remove("not-active");
    images[counter].classList.add("active");
    dots[counter].classList.add("dot-active");
})

for(let 1 = -; i < dots.length; i++){
    dots[1].addEventListener("click", ()=>{
        
    })
}