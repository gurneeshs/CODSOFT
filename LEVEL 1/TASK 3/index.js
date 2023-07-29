// let bt1 = document.querySelector("#bt1")
// let bt2 = document.querySelector("#bt2")
// let bt3 = document.querySelector("#bt3")
// let bt4 = document.querySelector("#bt4")
// let bt5 = document.querySelector("#bt5")
// let bt6 = document.querySelector("#bt6")
// let bt7 = document.querySelector("#bt7")
// let bt8 = document.querySelector("#bt8")
// let bt9 = document.querySelector("#bt9")
// let bt0 = document.querySelector("#bt0")
// let clear = document.querySelector("#clear")
// let plus = document.querySelector("#plus")
// let subt= document.querySelector("#subt")
// let mul = document.querySelector("#mul")
// let divide = document.querySelector("#divide")
// let equal = document.querySelector("#equal")

start = 0
let result = document.querySelector("#result")
let strng = ""
let strng1 = ""
let buttons = document.querySelectorAll("button")
let backspace = document.querySelector("#backspace")

buttons = Array.from(buttons)
console.log(buttons)
buttons.forEach((btn)=>{
    console.log(btn.innerHTML)
})
backspace.addEventListener("click",()=>{
    strng = strng.substring(0,(strng.length-1))
    strng1 = strng1.substring(0,(strng1.length-1))
    result.innerText = strng

})
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            console.log(strng1)
            strng = eval(strng1)
            result.innerText = strng

        }
        else if(e.target.innerHTML == "c"){
            strng = 0
            result.innerText = strng
            strng = ""
        }
        else if(e.target.innerHTML == "AC"){
            if(start==0){
                result.style.color = "black"
                start=1
            }
            else if(start==1){
                result.style.color = "rgb(119, 174, 38)"
                start=0
            }
            strng = 0
            result.innerText = strng
            strng = ""
        }
        else if(e.target.innerHTML == "x"){
            strng1 = strng + "*"
            strng =strng + "x"
            result.innerText = strng
        }
        else{
            strng = strng + e.target.innerHTML
            strng1 = strng1 + e.target.innerHTML
            result.innerText = strng
        }
    })
})

