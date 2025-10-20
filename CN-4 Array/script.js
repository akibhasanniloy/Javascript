let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);//property

let heros = ["Ironman", "spiderman", "Thor", "hulk", "Captain america", "batman", "superhero"];
console.log(heros);
console.log(heros[1]);
heros[1] = "Akib";
console.log(heros[1]);
console.log(heros.length);

//for loop
for (let i = 0; i <heros.length;i++){
    console.log(heros[i]);
}


let cities = ["munschen", "hamm", "lippstadt", "paderborn", "dortmund"];
for (let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

//for of loop
for (let hero of heros) {
    console.log(hero);
}

for (let city of cities) {
    console.log(city.toUpperCase());
}


//practice
let studentMarks = [85, 97, 44, 37, 76, 60];
let result=0;
let temp = 0;
for (let i = 0; i < studentMarks.length; i++){
    temp += studentMarks[i];
}
result = temp / studentMarks.length;
console.log(`average marks of the class ${result}`);


//practice
let items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    console.log(items[i]);
}

//or
let itemsa = [250, 645, 300, 900, 50];
let i = 0;
for (let value of itemsa) {
    let offer = value / 10;
    itemsa[i] = itemsa[i] - offer;
    console.log(itemsa[i]);
    i++;
}



//Array to push, pop and toString
let foodItems = ["Potato", "apple", "lichi", "tomato"];
console.log(foodItems);
foodItems.push("akib");
console.log(foodItems);
foodItems.pop("akib");
console.log(foodItems);
console.log(foodItems.toString());

//practice
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.shift();
companies.splice(2,1,"Hallo");
console.log(companies);
companies.push("Amazon");
console.log(companies);
