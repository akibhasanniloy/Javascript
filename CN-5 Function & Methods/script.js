//functions
function myfunction() {
    console.log("welcome to javascript.");
}

myfunction();

function functionMsg(msg) {
    //parameter input
    console.log(msg);
}
functionMsg("I love js."); //arguement

function functionSum(a, b) {
    console.log(a + b);
}

functionSum(9, 11);

function functionMul(a, b) {
    mul = a * b;
    return mul;
}

let val = functionMul(10, 6);
console.log(val);

//function sum
function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    console.log(a + b);
}

//function mul
function mul(a, b) {
    return a * b;
}

const arrowMul = (a, b) => {
    console.log(a * b);
}

//practice count vowel
function countVowel(str){
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

let str = countVowel("akib");
// console.log(str);

const countVow=(str)=>{
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

let str1 = countVow("Germany");

//methods
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function printVal(val) {
    console.log(val);
})

let arrCities = ["Dhaka", "Berlin", "Frankfurt", "Hamburg"];
arrCities.forEach((val,idx,arrCities) => {
    console.log(val.toUpperCase(),idx,arrCities);
})

// let result = 0;
arr.forEach((val) => {
    let result = val * val;
    console.log(result);
})

// map methods--> retuens new array
let nums = [67, 52, 39];
nums.map(val => {
    console.log(val);
})


//filter methods
let evenarr= arr.filter(val => {
    return val % 2 === 0;
})

console.log(evenarr);

let dreiVal = arr.filter(val => {
    return val > 3;
})

console.log(dreiVal);

//practice
let marksarr = [87, 33, 64, 99, 86];
let newmarksarr = marksarr.filter(val => {
    return val > 80;
})
console.log(newmarksarr);

// New practice
let n = prompt("Enter a number: ");
let arrN = [];
for (let i = 1; i <= n; i++){
    arrN[i-1] = i;
}
console.log(arrN);

let sumN=arrN.reduce((res, Curr) => {
    return res + Curr;
});
console.log(sumN);

let factN=arrN.reduce((res, Curr) => {
    return res * Curr;
});
console.log(factN);