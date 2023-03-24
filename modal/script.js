const showBtn = document.querySelectorAll(".show-modal");
const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function closeModal(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")  
}

for(let i = 0; i < showBtn.length; i++){
    showBtn[i].addEventListener("click",()=>{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    })
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
//e-eventi kishe
//Escape-Esc
document.addEventListener("keydown", (e)=>{
if(e.key === "Escape" && !modal.classList.contains("hidden")){
    closeModal();
}
})