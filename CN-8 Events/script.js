let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }

btn1.addEventListener("click",(evt)=> {
    console.log("button was clicked handler 1");
})
btn1.addEventListener("click",()=> {
    console.log("button was clicked 2.");    
})

const handler3 = () => {
    console.log("button was clicked 3.");  
}
btn1.addEventListener("click", handler3);

btn1.addEventListener("click",()=> {
    console.log("button was clicked 4.");    
})

btn1.removeEventListener("click", handler3);



//adding mode in the js
let btn2 = document.querySelector("#changemod");
let currentmode = "light";
let body = document.querySelector("body");
btn2.addEventListener("click", () => {
    if (currentmode === "light") {
        currentmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currentmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentmode);
})



let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log("you are inside the div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }