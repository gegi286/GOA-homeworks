// task1
let names = ["goga", "gegi", "nika", "luka", "mate"]

names.pop()
names.push("programing")

console.log(names)

// task2
let nums = [5, 7, 9, 11, 13]

nums.shift()
nums.unshift("IT")

console.log(nums)

// task3
let cars = ["AMG", "BMW", "AUDI"]

cars.shift()
cars.pop()
cars.unshift("MASERATTI")
cars.push("LAMBO")

console.log(cars)

// task4
let list = [ [1, 2] , ["goga" , "nika"] , [true , false] , ["gio" , 10] , [true, 10.5] ]

list.pop()
list.shift()

let newlist = [ [1, 2] , ["goga" , "nika"] , [true , false] , ["gio" , 10] , [true, 10.5] ]

newlist.flat()
newlist.unshift(99)
newlist.push("anzori")

console.log(newlist)


// task5
let cars1 = ["AMG", "BMW", "AUDI"] 
let names1 = ["goga", "gegi", "nika", "luka", "mate"]

cars1.concat(names1)

console.log(cars1)

// task6
let names2 = ["goga" , "lasha" , "irakli" , "irma" , "ia" , "ana" , "lulu"]

names2.splice(1 ,4)

console.log(names2)

// task7
let names3 = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]

names3.splice(2, 5, "Tbilisi"  , "gori")

console.log(names3)

// task8
let names4 = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]

let name = names4.toSpliced(5, 4)

console.log(name)