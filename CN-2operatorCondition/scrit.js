//this is a single line coment
/* this is multi line comment*/
console.log("akib")
console.log("akib")


let a= 5;
let b=3;
console.log("a+b", a + b);
console.log("a-b", a - b);
console.log("a*b", a * b);
console.log("a/b", a / b);

let n = 7;
if (n % 2 == 0) {
    console.log("Hello");
} else {
    console.log("bye");
}


//unary operator
for (let i = 1; i < 10; i++){
    console.log(i);
}

//comparison operator
let d = 10;
let e = 11;
console.log('d==e', d==e)
console.log('d===e', d === e)

//Conditional statement
let age = 18;
if (age < 18) {
    console.log("Youre a minor");
} else {
    console.log("welcome to the senior club")
}

let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color)

//practice
// let m = prompt("enter a number: ");

// if (m % 5===0) {
//     console.log("number is multiple of 5");
// } else {
//     console.log("number is not multiple of 5");
// }

let c = prompt("Enter the score: ")
let grade;
if (c >= 80 && c<= 100) {
    grade="A";
} else if(c >= 70 && c <= 89){
    grade = "B";
}else if(c >= 60 && c <= 69){
    grade = "C";
}else if(c >= 50 && c <= 59){
    grade = "D";
}else if(c >= 0 && c <= 49){
    grade = "F";
}