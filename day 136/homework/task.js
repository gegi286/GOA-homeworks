// task 1
let numbers1 = [10, 20, 30, 40, 50]
let removed1 = numbers1.pop()
console.log(removed1)
console.log(numbers1)


// task 2
let colors = ["Red", "Green", "Blue", "Black"]
let removedColor = colors.shift()
console.log(removedColor)
console.log(colors)


// task 3
let animals = ["Dog", "Cat"]
animals.unshift("Lion")
animals.unshift("Tiger", "Bear")
console.log(animals)


// task 4
let numbers4 = [5, 10, 15, 20, 25, 30, 35]
let sub1 = numbers4.slice(1, 4)
let sub2 = numbers4.slice(-3)
let sub3 = numbers4.slice(2)
console.log(sub1)
console.log(sub2)
console.log(sub3)
console.log(numbers4)


// task 5
let games = ["Minecraft", "GTA", "FIFA", "Roblox", "Fortnite"]
games.splice(1, 1)
console.log(games)
games[1] = "eFootball"
console.log(games)
games.splice(1, 0, "Terraria")
console.log(games)


// task 6
let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"]
let cCopy1 = cities.slice()
cCopy1.splice(1, 1)
console.log(cCopy1)

let cCopy2 = cities.slice()
cCopy2[2] = "Gori"
console.log(cCopy2)

let cCopy3 = cities.slice()
cCopy3.splice(2, 0, "Zugdidi")
console.log(cCopy3)
console.log(cities)


// task 7
let first = [1, 2, 3]
let second = "JavaScript"
let fourth = 25
let fifth = ["HTML", "CSS"]

console.log(Array.isArray(first))
console.log(Array.isArray(second))
console.log(Array.isArray(fourth))
console.log(Array.isArray(fifth))


// task 8
let numbers8 = [1, 2, [3, 4], [5, 6]]
let flatNumbers = numbers8.flat()
console.log(flatNumbers)
console.log(numbers8)


// task 9_1
let first9 = ["HTML", "CSS"]
let second9 = ["JavaScript", "React"]
let merged9 = first9.concat(second9)
console.log(merged9)


// task 9_2
let fruits9 = ["Apple", "Banana", "Orange", "Kiwi"]
fruits9.push("Mango")
fruits9.unshift("Strawberry")
fruits9.pop()
fruits9.shift()
let subFruits = fruits9.slice(0, 2)
console.log(subFruits)


// task 10
let toys = ["Car", "Doll", "Ball", "Robot", "Puzzle"]
toys.splice(1, 1, "Teddy Bear")
toys.push("Lego")
let threeToys = toys.slice(0, 3)
console.log(toys)
console.log(threeToys)


// task 11
let numbers11 = [10, 20, 30, 40, 50]
numbers11.splice(2, 1)
console.log(numbers11)

let original11 = [10, 20, 30, 40, 50]
let newTops = original11.toSpliced(2, 1)
console.log(newTops)
console.log(original11)


// task 12
let teamA = ["Nika", "Ana", "Gio"]
let teamB = ["Mariam", "Luka", "Saba"]
let combinedTeams = teamA.concat(teamB)
combinedTeams.unshift("Goga")
combinedTeams.push("Data")
combinedTeams.pop()
let topFour = combinedTeams.slice(0, 4)
console.log(topFour)


// task 13
let students13 = ["Nika", "Ana", "Gio", "Mariam", "Luka"]
let newStudents13 = ["Saba", "Data"]
let allStudents = students13.concat(newStudents13)
allStudents.unshift("Goga")
allStudents.splice(2, 1, "Elene")
let lastThree = allStudents.slice(-3)
allStudents.pop()
console.log(allStudents)
console.log(lastThree)


// task 14
let groupA = ["Nika", "Ana", "Gio"]
let groupB = ["Mariam", "Luka", "Saba"]
let groupC = [["Data", "Elene"], ["Sandro", "Nino"]]

console.log(Array.isArray(groupA))
console.log(Array.isArray(groupB))
console.log(Array.isArray(groupC))

let mergedAB = groupA.concat(groupB)
let flattenedC = groupC.flat()
let totalGroup = mergedAB.concat(flattenedC)

totalGroup.unshift("Goga")
totalGroup.push("Tornike")
totalGroup.splice(1, 2)

let modifiedGroup = totalGroup.toSpliced(1, 1, "Mariam K.")
let middlePart = modifiedGroup.slice(1, 4)

modifiedGroup.pop()
modifiedGroup.shift()

console.log(totalGroup)
console.log(modifiedGroup)
console.log(middlePart)

// the end ;)