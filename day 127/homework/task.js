// task1
let asakiInput = prompt("Enter your age:")
let sawyisiPhasiInput = prompt("Enter initial ticket price:")

let asakii = Number(asakiInput)
let sawyisiPhasi = Number(sawyisiPhasiInput)

if (isNaN(asakii) || isNaN(sawyisiPhasi) || asakii < 0 || sawyisiPhasi < 0) {
    console.log("Error: Age or ticket price cannot be negative!")
} else {
    let sabolooPhasi = sawyisiPhasi

    if (asaki < 7) {
        sabolooPhasi = 0
    } else if (asakii >= 7 && asakii <= 17) {
        sabolooPhasi = sawyisiPhasi * 0.5
    } else if (asakii >= 18 && asakii <= 59) {
        sabolooPhasi = sawyisiPhasi
    } else {
        sabolooPhasi = sawyisiPhasi * 0.7
    }

    if (asakii < 18 || asakii >= 60) {
        console.log("You have a discount")
    }

    console.log(`Final price: ${sabolooPhasi}`)
}

// task2
let momxmareblisSaxeli = "Goga"
let momxmareblisParoli = "Goa2026"
let momxmareblisAsaki = 20

if (!momxmareblisSaxeli || !momxmareblisParoli) {
    console.log("Fill in all fields")
} else if (momxmareblisSaxeli !== "Goga") {
    console.log("Incorrect username")
} else if (momxmareblisParoli !== "Goa2026") {
    console.log("Incorrect password")
} else {
    console.log("Login successful")
}

if (momxmareblisAsaki < 18) {
    console.log("Access denied")
}

// task3
let phasi = 250
let asaki = 22
let arisWevri = true

if (phasi < 0) {
    console.log("Invalid price")
} else {
    let phasdakleba = 0

    if (arisWevri && phasi > 200) {
        phasdakleba += 25
    }

    if (arisWevri || asaki < 18) {
        phasdakleba += 10
    }

    if (asaki >= 60 && phasi > 100) {
        phasdakleba += 15
    }

    let sabolooTanxa = phasi - phasdakleba
    if (sabolooTanxa < 0) {
        sabolooTanxa = 0
    }

    console.log(`Initial price: ${phasi}`)
    console.log(`Discount: ${phasdakleba}`)
    console.log(`Final amount: ${sabolooTanxa}`)
}

// task4

let numInput = prompt("Enter a number:")
let num = Number(numInput)

if (isNaN(num)) {
    console.log("Error: Invalid number")
} else {
    if (num > 0) {
        if (num > 100) {
            console.log("Large positive number")
        } else if (num < 100) {
            console.log("Small positive number")
        }
    } else if (num < 0) {
        if (num % 2 === 0) {
            console.log("Negative even number")
        } else {
            console.log("Negative odd number")
        }
    } else {
        console.log("Zero")
    }

    if (num >= 10 && num <= 20) {
        console.log("Special range")
    }
}

// task5
let saxeli = "Goga"
let matematika = 85
let inglisuri = 90
let programireba = 95

let sasualo = (matematika + inglisuri + programireba) / 3

if (matematika < 50 || inglisuri < 50 || programireba < 50) {
    console.log("Failed")
} else if (matematika >= 90 && inglisuri >= 90 && programireba >= 90) {
    console.log("Excellent student")
} else if (sasualo >= 80 && matematika >= 70) {
    console.log("Very good student")
} else {
    console.log("Needs improvement")
}

// task6
let userAgeInput = prompt("Enter your age:")
let userHeightInput = prompt("Enter your height in cm:")

let userAge = Number(userAgeInput)
let userHeight = Number(userHeightInput)

if (isNaN(userAge) || isNaN(userHeight) || userAge < 0 || userHeight < 0) {
    console.log("Invalid data")
} else {
    if (userAge >= 12 && userHeight >= 140) {
        console.log("You can ride")
    } else {
        console.log("You cannot ride")
    }

    if (userAge >= 18 && userHeight >= 180) {
        console.log("VIP access")
    }
}

// task7
let myVal = 45

if (myVal >= 10 && myVal <= 50) {
    console.log("Inside range")
} else if (myVal < 10 || myVal > 50) {
    console.log("Outside range")
}

if (myVal % 2 === 0 && myVal > 20) {
    console.log("Special even number")
}

if (myVal % 2 !== 0 && myVal < 30) {
    console.log("Special odd number")
}

if (myVal === 25 || myVal === 50) {
    console.log("Exact match")
}

// task8
let firstTestInput = prompt("Enter first exam score:")
let secondTestInput = prompt("Enter second exam score:")
let thirdTestInput = prompt("Enter third exam score:")
let candidateAgeInput = prompt("Enter your age:")

let scoreOne = Number(firstTestInput)
let scoreTwo = Number(secondTestInput)
let scoreThree = Number(thirdTestInput)
let candidateAge = Number(candidateAgeInput)

if (
    scoreOne < 0 || scoreOne > 100 ||
    scoreTwo < 0 || scoreTwo > 100 ||
    scoreThree < 0 || scoreThree > 100
) {
    console.log("Invalid score")
} else if (scoreOne < 50 || scoreTwo < 50 || scoreThree < 50) {
    console.log("Rejected")
} else {
    let meanScore = (scoreOne + scoreTwo + scoreThree) / 3

    if (scoreOne >= 80 && scoreTwo >= 80 && scoreThree >= 80 && candidateAge >= 18) {
        console.log("Accepted")
    }

    if (scoreOne >= 90 && scoreTwo >= 90 && scoreThree >= 90) {
        console.log("Scholarship candidate")
    }

    if (meanScore >= 70 && (scoreOne < 80 || scoreTwo < 80 || scoreThree < 80)) {
        console.log("Waitlisted")
    } else if (
        !(scoreOne >= 80 && scoreTwo >= 80 && scoreThree >= 80 && candidateAge >= 18) &&
        !(scoreOne >= 90 && scoreTwo >= 90 && scoreThree >= 90)
    ) {
        console.log("Not accepted")
    }
}

// the end;)
