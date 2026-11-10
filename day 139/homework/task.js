// Task 1
let numbers1 = [12, 25, 8, 40, 17, 30]

console.log("--- ყველა ელემენტი ---")
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i])
}

console.log("--- მხოლოდ ლუწი რიცხვები ---")
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
        console.log(numbers1[i])
    }
}

console.log("--- მხოლოდ კენტი რიცხვები ---")
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 !== 0) {
        console.log(numbers1[i])
    }
}

console.log("--- გამრავლებული 2-ზე ---")
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i] * 2)
}


// Task 2
let names = ["Nika", "Ana", "Giorgi", "Mariam", "Luka"]

console.log("--- ყველა სახელი ---")
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

console.log("--- სიგრძე 4-ზე მეტი ---")
for (let i = 0; i < names.length; i++) {
    if (names[i].length > 4) {
        console.log(names[i])
    }
}

console.log("--- იწყება A-ზე ---")
for (let i = 0; i < names.length; i++) {
    if (names[i][0] === "A") {
        console.log(names[i])
    }
}

console.log("--- ბოლოში !" + " ---")
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + "!")
}


// Task 3
let ages = [12, 17, 20, 15, 25, 16]

for (let i = 0; i < ages.length; i++) {
    ages[i] += 1
    if (ages[i] < 18) {
        ages[i] = 18
    }
}

console.log("--- განახლებული ასაკის მასივი ---")
console.log(ages)


// Task 4
let prices = [100, 250, 80, 400, 150, 50]

console.log("--- 100-ზე მეტი ფასები ---")
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 100) {
        console.log(prices[i])
    }
}

let modifiedPrices = []
for (let i = 0; i < prices.length; i++) {
    let p = prices[i] + 20
    if (p > 200) {
        p -= 50
    }
    modifiedPrices.push(p)
}
console.log("--- განახლებული ფასები ---")
console.log(modifiedPrices)

let cheaperCount = 0
for (let i = 0; i < prices.length; i++) {
    if (prices[i] < 100) {
        cheaperCount++
    }
}
console.log("100-ზე იაფი პროდუქტების რაოდენობა:", cheaperCount)


// Task 5
let scores = [45, 90, 67, 32, 100, 75, 50]

console.log("--- ყველა ქულა ---")
for (let i = 0; i < scores.length; i++) {
    console.log(scores[i])
}

console.log("--- 60-ზე მაღალი ქულები ---")
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 60) {
        console.log(scores[i])
    }
}

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 50) {
        scores[i] = 50
    }
}

let passed70Count = 0
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 70) {
        passed70Count++
    }
}
console.log("70 ან მეტი მიიღო:", passed70Count)

let maxScore = scores[0]
for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
        maxScore = scores[i]
    }
}
console.log("ყველაზე მაღალი ქულა:", maxScore)


// Task 6
let numbers6 = [5, 12, 8, 21, 30, 7, 16]
let newNumbers = []

for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] % 2 === 0) {
        newNumbers.push(numbers6[i] * 3)
    }
}

console.log("--- ახალი მასივი (ლუწები გამრავლებული 3-ზე) ---")
console.log(newNumbers)


// Task 7
let numbers7 = [12, -5, 8, -20, 0, 15, -3, 7]

let positiveCount = 0
let negativeCount = 0
let sum = 0
let positiveArray = []

for (let i = 0; i < numbers7.length; i++) {
    sum += numbers7[i]
    if (numbers7[i] > 0) {
        positiveCount++
        positiveArray.push(numbers7[i])
    } else if (numbers7[i] < 0) {
        negativeCount++
    }
}

console.log("დადებითი რიცხვების რაოდენობა:", positiveCount)
console.log("უარყოფითი რიცხვების რაოდენობა:", negativeCount)
console.log("ყველა რიცხვის ჯამი:", sum)
console.log("მხოლოდ დადებითი მასივი:", positiveArray)

for (let i = 0; i < numbers7.length; i++) {
    if (numbers7[i] < 0) {
        numbers7[i] = 0
    }
}
console.log("თავდაპირველი მასივი უარყოფითების ნაცვლად ნულებით:", numbers7)


// Task 8
let students = ["Nika", "Ana", "Giorgi", "Luka", "Mariam", "Dato"]
let selectedStudents = []
let len5Count = 0

for (let i = 0; i < students.length; i++) {
    let name = students[i]
    if (name.length > 4) {
        selectedStudents.push(name)
    }
    if (name[0] === "M") {
        console.log("Special student:", name)
    }
    if (name.length >= 5) {
        len5Count++
    }
}

console.log("სტუდენტები 4 სიმბოლოზე მეტი სახელით:", selectedStudents)
console.log("სტუდენტები 5 ან მეტი სიმბოლოთი:", len5Count)


// Task 9
let points = [15, 40, 65, 20, 90, 35, 100]

for (let i = 0; i < points.length; i++) {
    if (points[i] < 50) {
        points[i] += 10
    } else if (points[i] >= 50 && points[i] <= 80) {
        points[i] += 5
    } else {
        points[i] -= 10
    }
}

console.log("განახლებული ქულების მასივი:", points)

let above50Count = 0
for (let i = 0; i < points.length; i++) {
    if (points[i] > 50) {
        above50Count++
    }
}
console.log("50-ზე მეტი ქულების რაოდენობა:", above50Count)


// Task 10
let numbers10 = [12, 5, 30, 18, 7, 42, 15, 60, 9]
let evenNumbers = []
let oddNumbers = []
let modifiedNumbers = []

for (let i = 0; i < numbers10.length; i++) {
    let n = numbers10[i]
    if (n % 2 === 0) {
        evenNumbers.push(n)
    } else {
        oddNumbers.push(n)
    }

    if (n > 20) {
        modifiedNumbers.push(n / 2)
    } else {
        modifiedNumbers.push(n * 2)
    }
}

console.log("Even numbers:", evenNumbers)
console.log("Odd numbers:", oddNumbers)
console.log("Modified numbers:", modifiedNumbers)

// the end;)