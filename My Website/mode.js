let mode=document.querySelector("#modebtn");
let body=document.querySelector("body");

let currentMode="light";

mode.addEventListener("click",()=>{
    if(currentMode=="light"){
        currentMode="dark";
        body.classList.add("dark");
    }
    else{
        currentMode="light";
        body.classList.remove("dark");
    }
});