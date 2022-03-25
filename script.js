//TIP CALULATOR

// let billamount = 200;
// let tip = .2;


// function calculateTIp(billamount, tip) {
//     return billamount * tip;

// }

// let resulttip= calculateTIp (billamount, tip);

// console.log(resulttip.toFixed (2));


// function getBillTotal (billamount, resulttip){
//     return billamount + resulttip;
// }

// let billtotal= getBillTotal (billamount, resulttip)

// console.log(billtotal.toFixed(2))


//Sorting Some Data

// let group7 = ["Mark, Carmeron, Simone, Poonam, Choua"]
// console.log (group7)

// let food = ["vegetables, fruits, grains, meat, fish, diary, eggs, seafood, nuts,poultry"]
// console.log (food)


// let states = [["Alabama", "Montgomery", "Yellohammer"],["Alaska", "Juneau", "Willo Ptarmigan"], ["Arizona", "Phoenix", "Cactus Wren"],["California", "Sacramento", "California Valley Quail"],["Colorado","Denver","Lark Bunting"],["Connecticut","Hartford", "American Robin"],["Delaware","Dover","Blue Hen Chicken"]]

// console.log(states)

//ARRAY METHOD PRACTICE

//Simple Stuff

// let num =[1,2,3]

// function getfirstValue(num) {
//     return num[0];
// }

// console.log(num [0])


// let num2 =[1,2,3,4];

// let num3 = (num2.map(num2 => num2 + 1));
// console.log(num3)

//ROTATE AN ARRAY

// let arr =[1,2,3,4];

// console.log (arr)

// function rotateLeft (arr){
//     let first = arr.shift ();
//     arr.push(first);
//     return arr;
// }
// console.log (rotateLeft(arr))


//Shopping List

var shoppinglist = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
console.log (shoppinglist);

shoppinglist.push ("fruit loops");
console.log(shoppinglist);

shoppinglist[4]="fair trade coffee "
shoppinglist[2]="rice"
shoppinglist[3]="beans"
console.log(shoppinglist);


var shoppingcart = [shoppinglist.pop()];
console.log (shoppingcart);

var shoppingcart = [shoppinglist.shift()];
console.log(shoppingcart);

var i = 0;
var shoppingcart="";
while (shoppinglist[i]) {
    shoppingcart += shoppinglist [i];i++;
}
console.log(shoppinglist);


shoppinglist.sort();
console.log(shoppinglist)

shoppinglist.reverse();
console.log(shoppinglist)

let text = shoppinglist.toString();
console.log (text)