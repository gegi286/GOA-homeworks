// task1
let fruits = "apple,banana,orange,kiwi";
fruits.split(",")

console.log(fruits)

let indexfruits = fruits.indexOf("banana")
console.log(indexfruits)

let newFruits = fruits.indexOf("kiwi")
console.log(newFruits)

fruits[1] = "mango"
console.log(fruits)

let newarray = fruits.join("$")
console.log(newarray)