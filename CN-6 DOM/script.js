// // console.log(document.body.childNodes[2])
// // document.body.childNodes[3].innerText = "abcd";


// //Dom manupulation
// let button = document.getElementById("myId");
// console.log(button);
// console.dir(button);

// let headings = document.getElementsByClassName("myClass");
// console.log(headings)
// console.dir(headings)

// let parahs = document.getElementsByTagName("p");
// console.log(parahs);
// console.dir(parahs);

// //Query selectior --> node list
// let firstEl = document.querySelector("p"); //give us the 1st element
// console.dir(firstEl);

// let allElements = document.querySelectorAll("p");// for all elements
// console.dir(allElements);

// let allElementsClass = document.querySelectorAll(".myClass");
// console.dir(allElements);

// //properties for get and set something
// //tagName
// let tagSomething = firstEl.tagName;
// console.log(tagSomething);
// console.dir(tagSomething);

//main dom
let div = document.querySelector("div");
console.dir(div);

let heading = document.querySelector("h1");

let headingPractice = document.querySelector("h2");
headingPractice.innerText = headingPractice.innerText + " I am Akib";
console.dir(headingPractice);

let divs = document.querySelectorAll(".box");
let idx = 1;
for (div of divs) {
    div.innerText = `new uniquw value ${idx}`;
    idx++;
}
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";
