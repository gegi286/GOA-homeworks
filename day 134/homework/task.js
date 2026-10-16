// task 1
let player1Score = 0
let player2Score = 0

let p1Power1 = Math.floor(Math.random() * 21) + 10
let p2Power1 = Math.floor(Math.random() * 21) + 10
if (p1Power1 === 20) {
    p1Power1 = p1Power1 + 5
}
if (p2Power1 === 20) {
    p2Power1 = p2Power1 + 5
}
console.log("Round 1 - Player 1: " + p1Power1 + ", Player 2: " + p2Power1)
if (p1Power1 > 25 && p2Power1 > 25) {
    console.log("ფრეა!")
} else if (p1Power1 > p2Power1) {
    player1Score = player1Score + 1
} else if (p2Power1 > p1Power1) {
    player2Score = player2Score + 1
} else if (p1Power1 === p2Power1) {
    console.log("ფრეა!")
}

let p1Power2 = Math.floor(Math.random() * 21) + 10
let p2Power2 = Math.floor(Math.random() * 21) + 10
if (p1Power2 === 20) {
    p1Power2 = p1Power2 + 5
}
if (p2Power2 === 20) {
    p2Power2 = p2Power2 + 5
}
console.log("Round 2 - Player 1: " + p1Power2 + ", Player 2: " + p2Power2)
if (p1Power2 > 25 && p2Power2 > 25) {
    console.log("ფრეა!")
} else if (p1Power2 > p2Power2) {
    player1Score = player1Score + 1
} else if (p2Power2 > p1Power2) {
    player2Score = player2Score + 1
} else if (p1Power2 === p2Power2) {
    console.log("ფრეა!")
}

let p1Power3 = Math.floor(Math.random() * 21) + 10
let p2Power3 = Math.floor(Math.random() * 21) + 10
if (p1Power3 === 20) {
    p1Power3 = p1Power3 + 5
}
if (p2Power3 === 20) {
    p2Power3 = p2Power3 + 5
}
console.log("Round 3 - Player 1: " + p1Power3 + ", Player 2: " + p2Power3)
if (p1Power3 > 25 && p2Power3 > 25) {
    console.log("ფრეა!")
} else if (p1Power3 > p2Power3) {
    player1Score = player1Score + 1
} else if (p2Power3 > p1Power3) {
    player2Score = player2Score + 1
} else if (p1Power3 === p2Power3) {
    console.log("ფრეა!")
}

let p1Power4 = Math.floor(Math.random() * 21) + 10
let p2Power4 = Math.floor(Math.random() * 21) + 10
if (p1Power4 === 20) {
    p1Power4 = p1Power4 + 5
}
if (p2Power4 === 20) {
    p2Power4 = p2Power4 + 5
}
console.log("Round 4 - Player 1: " + p1Power4 + ", Player 2: " + p2Power4)
if (p1Power4 > 25 && p2Power4 > 25) {
    console.log("ფრეა!")
} else if (p1Power4 > p2Power4) {
    player1Score = player1Score + 1
} else if (p2Power4 > p1Power4) {
    player2Score = player2Score + 1
} else if (p1Power4 === p2Power4) {
    console.log("ფრეა!")
}

let p1Power5 = Math.floor(Math.random() * 21) + 10
let p2Power5 = Math.floor(Math.random() * 21) + 10
if (p1Power5 === 20) {
    p1Power5 = p1Power5 + 5
}
if (p2Power5 === 20) {
    p2Power5 = p2Power5 + 5
}
console.log("Round 5 - Player 1: " + p1Power5 + ", Player 2: " + p2Power5)
if (p1Power5 > 25 && p2Power5 > 25) {
    console.log("ფრეა!")
} else if (p1Power5 > p2Power5) {
    player1Score = player1Score + 1
} else if (p2Power5 > p1Power5) {
    player2Score = player2Score + 1
} else if (p1Power5 === p2Power5) {
    console.log("ფრეა!")
}

console.log("Player 1 score: " + player1Score)
console.log("Player 2 score: " + player2Score)

if (player1Score > player2Score) {
    console.log("გამარჯვებულია Player 1")
} else if (player2Score > player1Score) {
    console.log("გამარჯვებულია Player 2")
} else if (player1Score === player2Score) {
    console.log("ფრეა!")
}


// task 2
let totalPoints = 0

let d1 = Math.floor(Math.random() * 6) + 1
let d2 = Math.floor(Math.random() * 6) + 1
let d3 = Math.floor(Math.random() * 6) + 1
let sum1 = d1 + d2 + d3
console.log("Dice: " + d1 + " " + d2 + " " + d3 + " Sum: " + sum1)
if (d1 === d2 && d2 === d3) {
    totalPoints = totalPoints + 50
} else if (d1 === d2 || d1 === d3 || d2 === d3) {
    totalPoints = totalPoints + 20
} else if (sum1 > 10) {
    totalPoints = totalPoints + 10
}
if (sum1 % 2 === 0) {
    totalPoints = totalPoints + 5
} else if (sum1 % 2 !== 0) {
    totalPoints = totalPoints - 3
}

let d4 = Math.floor(Math.random() * 6) + 1
let d5 = Math.floor(Math.random() * 6) + 1
let d6 = Math.floor(Math.random() * 6) + 1
let sum2 = d4 + d5 + d6
console.log("Dice: " + d4 + " " + d5 + " " + d6 + " Sum: " + sum2)
if (d4 === d5 && d5 === d6) {
    totalPoints = totalPoints + 50
} else if (d4 === d5 || d4 === d6 || d5 === d6) {
    totalPoints = totalPoints + 20
} else if (sum2 > 10) {
    totalPoints = totalPoints + 10
}
if (sum2 % 2 === 0) {
    totalPoints = totalPoints + 5
} else if (sum2 % 2 !== 0) {
    totalPoints = totalPoints - 3
}

let d7 = Math.floor(Math.random() * 6) + 1
let d8 = Math.floor(Math.random() * 6) + 1
let d9 = Math.floor(Math.random() * 6) + 1
let sum3 = d7 + d8 + d9
console.log("Dice: " + d7 + " " + d8 + " " + d9 + " Sum: " + sum3)
if (d7 === d8 && d8 === d9) {
    totalPoints = totalPoints + 50
} else if (d7 === d8 || d7 === d9 || d8 === d9) {
    totalPoints = totalPoints + 20
} else if (sum3 > 10) {
    totalPoints = totalPoints + 10
}
if (sum3 % 2 === 0) {
    totalPoints = totalPoints + 5
} else if (sum3 % 2 !== 0) {
    totalPoints = totalPoints - 3
}

let d10 = Math.floor(Math.random() * 6) + 1
let d11 = Math.floor(Math.random() * 6) + 1
let d12 = Math.floor(Math.random() * 6) + 1
let sum4 = d10 + d11 + d12
console.log("Dice: " + d10 + " " + d11 + " " + d12 + " Sum: " + sum4)
if (d10 === d11 && d11 === d12) {
    totalPoints = totalPoints + 50
} else if (d10 === d11 || d10 === d12 || d11 === d12) {
    totalPoints = totalPoints + 20
} else if (sum4 > 10) {
    totalPoints = totalPoints + 10
}
if (sum4 % 2 === 0) {
    totalPoints = totalPoints + 5
} else if (sum4 % 2 !== 0) {
    totalPoints = totalPoints - 3
}

let d13 = Math.floor(Math.random() * 6) + 1
let d14 = Math.floor(Math.random() * 6) + 1
let d15 = Math.floor(Math.random() * 6) + 1
let sum5 = d13 + d14 + d15
console.log("Dice: " + d13 + " " + d14 + " " + d15 + " Sum: " + sum5)
if (d13 === d14 && d14 === d15) {
    totalPoints = totalPoints + 50
} else if (d13 === d14 || d13 === d15 || d14 === d15) {
    totalPoints = totalPoints + 20
} else if (sum5 > 10) {
    totalPoints = totalPoints + 10
}
if (sum5 % 2 === 0) {
    totalPoints = totalPoints + 5
} else if (sum5 % 2 !== 0) {
    totalPoints = totalPoints - 3
}

console.log("საერთო ქულა: " + totalPoints)


// task 3
let coinScore = 0

let coin1 = Math.floor(Math.random() * 2)
let guess1 = Number(prompt("შეიყვანე ვარაუდი 1 (0 ან 1):"))
if (guess1 === coin1) {
    coinScore = coinScore + 10
}

let coin2 = Math.floor(Math.random() * 2)
let guess2 = Number(prompt("შეიყვანე ვარაუდი 2 (0 ან 1):"))
if (guess2 === coin2) {
    coinScore = coinScore + 10
}

let coin3 = Math.floor(Math.random() * 2)
let guess3 = Number(prompt("შეიყვანე ვარაუდი 3 (0 ან 1):"))
if (guess3 === coin3) {
    coinScore = coinScore + 10
}

let coin4 = Math.floor(Math.random() * 2)
let guess4 = Number(prompt("შეიყვანე ვარაუდი 4 (0 ან 1):"))
if (guess4 === coin4) {
    coinScore = coinScore + 10
}

let coin5 = Math.floor(Math.random() * 2)
let guess5 = Number(prompt("შეიყვანე ვარაუდი 5 (0 ან 1):"))
if (guess5 === coin5) {
    coinScore = coinScore + 10
}

console.log("საერთო ქულა: " + coinScore)


// task 4
let shootScore = 0
let shoot = Math.floor(Math.random() * 100) + 1

console.log("სროლის შედეგი: " + shoot)

if (shoot > 80) {
    shootScore = shootScore + 20
} else if (shoot > 50) {
    shootScore = shootScore + 10
} else {
    shootScore = shootScore + 0
}

console.log("საერთო ქულა: " + shootScore)


// task 5
let secretNum = Math.floor(Math.random() * 50) + 1

let g1 = Number(prompt("მცდელობა 1 (1-50):"))
if (g1 === secretNum) {
    console.log("მოიგე!")
} else if (g1 > secretNum) {
    console.log("შეამცირე!")
} else if (g1 < secretNum) {
    console.log("გაზარდე!")
}

if (g1 !== secretNum) {
    let g2 = Number(prompt("მცდელობა 2 (1-50):"))
    if (g2 === secretNum) {
        console.log("მოიგე!")
    } else if (g2 > secretNum) {
        console.log("შეამცირე!")
    } else if (g2 < secretNum) {
        console.log("გაზარდე!")
    }

    if (g2 !== secretNum) {
        let g3 = Number(prompt("მცდელობა 3 (1-50):"))
        if (g3 === secretNum) {
            console.log("მოიგე!")
        } else if (g3 > secretNum) {
            console.log("შეამცირე!")
        } else if (g3 < secretNum) {
            console.log("გაზარდე!")
        }

        if (g3 !== secretNum) {
            let g4 = Number(prompt("მცდელობა 4 (1-50):"))
            if (g4 === secretNum) {
                console.log("მოიგე!")
            } else if (g4 > secretNum) {
                console.log("შეამცირე!")
            } else if (g4 < secretNum) {
                console.log("გაზარდე!")
            }

            if (g4 !== secretNum) {
                let g5 = Number(prompt("მცდელობა 5 (1-50):"))
                if (g5 === secretNum) {
                    console.log("მოიგე!")
                } else if (g5 > secretNum) {
                    console.log("შეამცირე!")
                    console.log("საიდუმლო რიცხვი იყო: " + secretNum)
                } else if (g5 < secretNum) {
                    console.log("გაზარდე!")
                    console.log("საიდუმლო რიცხვი იყო: " + secretNum)
                }
            }
        }
    }
}


// task 6
console.log(20)
console.log(10)


// task 7
function greet1() {
    let message = "Hello!"
    return message
}
let msg1 = greet1()
console.log(msg1)

let message2 = "Hello!"
function greet2() {
    console.log(message2)
}
greet2()


// task 8
let age = 18
const name = "Nika"

if (true) {
    console.log(age)
    console.log(name)
}

console.log(age)
console.log(name)


// task 9
let points9 = 100

function first9() {
    let points9 = 50

    function second9() {
        let points9 = 25
        console.log(points9)
    }

    second9()

    console.log(points9)
}

first9()

console.log(points9)


// task 10
let result10 = 10

function calculate10() {
    let result10 = 30
    return result10 + 20
}

result10 = calculate10()

console.log(result10)