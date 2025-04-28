// const addToCart = require("./cartModules"); //default Import
const {addToCart, changeQuantity} = require("./cartModules")

console.log("Hello Happy New year 2082 BS");
console.log(20 + 20 -10);
let l = [10, 20, 30, 50];
l.forEach((value, index)=>{
    console.log(value, index);
})
console.log('heollo');
console.log(addToCart());
console.log(changeQuantity());