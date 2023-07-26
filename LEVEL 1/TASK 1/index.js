let hambuton = document.querySelector(".hamberger")
let navsecton = document.querySelector(".nav-itms")
let set = 0
hambuton.addEventListener("click", ()=>{
    if(set==0){
        navsecton.style.transform = "translateY(150%)"
        set = 1
    }
    else{
        navsecton.style.transform = "translateY(-150%)"
        set = 0
    }
})