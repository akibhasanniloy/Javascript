// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// div.style.fontSize = "26px";
// div.innerText = "hello";

// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// //insert
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

//append
let div = document.querySelector("div");
// div.append(newBtn); //-->last
div.prepend(newBtn);

let para = document.querySelector("p");
para.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hello there!</i>";

document.querySelector("body").append(newHeading);

para.remove();