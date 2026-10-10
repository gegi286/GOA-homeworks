// task 1
let randomNumber1 = Math.floor(Math.random() * 10) + 1
let playerGuess = Number(prompt("შეიყვანე რიცხვი 1-დან 10-მდე: "))

if (playerGuess === randomNumber1) {
    console.log("🎉 გამოიცანი!")
} else {
    console.log("❌ ვერ გამოიცანი!")
}


// task 2
let diceRoll = Math.floor(Math.random() * 6) + 1
console.log("You rolled: " + diceRoll)

if (diceRoll === 6) {
    console.log("🎉 You got the highest number!")
} else if (diceRoll === 1) {
    console.log("😢 You got the lowest number!")
} else {
    console.log("ჩვეულებრივი შედეგი.")
}


// task 3
let player1 = Math.floor(Math.random() * 6) + 1
let player2 = Math.floor(Math.random() * 6) + 1

console.log("Player 1: " + player1)
console.log("Player 2: " + player2)

if (player1 > player2) {
    console.log("Player 1 wins!")
} else if (player2 > player1) {
    console.log("Player 2 wins!")
} else if (player1 === player2) {
    console.log("ფრეა!")
}


// task 4
let p1Power = Math.floor(Math.random() * 21) + 10
let p2Power = Math.floor(Math.random() * 21) + 10

if (p1Power === 20) {
    p1Power = p1Power + 5
}

if (p2Power === 20) {
    p2Power = p2Power + 5
}

console.log("Player 1: " + p1Power)
console.log("Player 2: " + p2Power)

if (p1Power > p2Power) {
    console.log("Player 1 wins!")
} else if (p2Power > p1Power) {
    console.log("Player 2 wins!")
} else if (p1Power === p2Power) {
    console.log("ფრეა!")
}


// task 5
let car1Speed = Math.floor(Math.random() * 51) + 50
let car2Speed = Math.floor(Math.random() * 51) + 50

console.log("Car 1 speed: " + car1Speed)
if (car1Speed > 90) {
    console.log("🔥 Super fast!")
}

console.log("Car 2 speed: " + car2Speed)
if (car2Speed > 90) {
    console.log("🔥 Super fast!")
}

if (car1Speed > car2Speed) {
    console.log("Car 1 wins!")
} else if (car2Speed > car1Speed) {
    console.log("Car 2 wins!")
} else if (car1Speed === car2Speed) {
    console.log("ფრე")
}


// task 6
let box = Math.floor(Math.random() * 4) + 1

if (box === 1) {
    console.log("100 coins")
} else if (box === 2) {
    console.log("50 coins")
} else if (box === 3) {
    console.log("200 coins")
    console.log("🎉 JACKPOT!")
} else if (box === 4) {
    console.log("10 coins")
}


// task 7
let player7Power = Math.floor(Math.random() * 21) + 10
let monster7Power = Math.floor(Math.random() * 21) + 10

if (player7Power === 25) {
    player7Power = player7Power + 10
}

console.log("Player power: " + player7Power)
console.log("Monster power: " + monster7Power)

if (player7Power > monster7Power) {
    console.log("მოთამაშე იგებს")
} else if (monster7Power > player7Power) {
    console.log("მონსტრი იგებს")
} else if (player7Power === monster7Power) {
    console.log("ფრე")
}


// task 8
let num1 = Math.floor(Math.random() * 9) + 1
let num2 = Math.floor(Math.random() * 9) + 1
let num3 = Math.floor(Math.random() * 9) + 1

console.log("კომპიუტერის რიცხვები: " + num1 + " " + num2 + " " + num3)

let user1 = Number(prompt("შეიყვანე პირველი რიცხვი:"))
let user2 = Number(prompt("შეიყვანე მეორე რიცხვი:"))
let user3 = Number(prompt("შეიყვანე მესამე რიცხვი:"))

let matches = 0

if (user1 === num1 || user1 === num2 || user1 === num3) {
    matches = matches + 1
}
if (user2 === num1 || user2 === num2 || user2 === num3) {
    matches = matches + 1
}
if (user3 === num1 || user3 === num2 || user3 === num3) {
    matches = matches + 1
}

if (matches === 3) {
    console.log("JACKPOT!")
} else if (matches === 2) {
    console.log("დიდი მოგება!")
} else if (matches === 1) {
    console.log("პატარა მოგება!")
} else if (matches === 0) {
    console.log("წააგე!")
}


// task 9
let playerPower = Math.floor(Math.random() * 21) + 10
let monsterPower = Math.floor(Math.random() * 21) + 10

if (playerPower === 20) {
    playerPower = playerPower + 5
}

if (monsterPower === 15) {
    monsterPower = monsterPower + 10
}

console.log("Player power: " + playerPower)
console.log("Monster power: " + monsterPower)

if (playerPower > monsterPower) {
    console.log("მოთამაშე იგებს")
} else if (monsterPower > playerPower) {
    console.log("მონსტრი იგებს")
} else if (playerPower === monsterPower) {
    console.log("ფრეა!")
}


// task 10
let w1Attack = Math.floor(Math.random() * 21) + 10
let w1Defense = Math.floor(Math.random() * 16) + 5

let w2Attack = Math.floor(Math.random() * 21) + 10
let w2Defense = Math.floor(Math.random() * 16) + 5

let w1Total = w1Attack + w1Defense
let w2Total = w2Attack + w2Defense

if (w1Attack >= 25) {
    w1Total = w1Total + 5
}
if (w1Defense === 20) {
    w1Total = w1Total + 10
}

if (w2Attack >= 25) {
    w2Total = w2Total + 5
}
if (w2Defense === 20) {
    w2Total = w2Total + 10
}

console.log("Wizard 1 Total: " + w1Total)
console.log("Wizard 2 Total: " + w2Total)

if (w1Total > w2Total) {
    console.log("Wizard 1 wins!")
} else if (w2Total > w1Total) {
    console.log("Wizard 2 wins!")
} else if (w1Total === w2Total) {
    console.log("ფრეა!")
}

// the end ;)