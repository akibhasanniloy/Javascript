console.log("Hello");

let a = 1;
for (a = 1; a < 10; a++){
    //console.log(a)
    console.log("Akib")
}

let b = 1;
while (b < 6) {
    console.log(b);
    b++;
}

let i = 1;
do {
    console.log("Akib Hasan Niloy");
    i++;
}while(i<=10)

//for of loop
let str = "Javascript";
let size = 0;
for (let j of str) {
    console.log("j=", j);
    size++;
}
console.log("string size= ", size);

//for in loop
let student = {
    name: "akib hasan",
    age: 10,
    cgpa: 3.5,
    isPass: true,
}

for (let key in student) {
    console.log("key=",key,"value=",student[key]);
}

//practice question
for (let k = 1; k <= 100; k++){
    if (k % 2 == 0) {
        console.log(k)
    }
}

//2
// let gamenum=25;
// let userNum = prompt("Guess the game number: ");

// while (userNum != gamenum) {
//     userNum= prompt("You entered wrong number. Guess again.");
// }
// console.log("congratulations you guess the right number.");



//string
let stri = "Javascript";
console.log(stri);
console.log(stri[0]);
console.log(stri.length);

let obj = {
    item: "pen",
    price: 10,
}
let output = `the cost of ${obj.item} is ${obj.price} euro`;
console.log(output);
console.log("the cost of", obj.item, " is", obj.price);

let specialString = `This is string letreal`;
console.log(typeof specialString);


// practice questions
let userName = prompt("Enter you name: ");

let usernameAfter = `@${userName}${userName.length}`;
console.log(usernameAfter);