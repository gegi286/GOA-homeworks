// Task 1
const greet = function(name) {
    return `Hello, ${name}!`
}

console.log(greet("Giorgi"))

// Task 2
const sum = function(a, b) {
    return a + b
}

console.log(sum(5, 10))
console.log(sum(15, 25))

// Task 3
const welcome = function(name = "Guest") {
    return `Welcome, ${name}!`
}

console.log(welcome("Goga"))
console.log(welcome())

// Task 4
const checkAge = function(age) {
    if (age >= 18) {
        return "You are an adult"
    } else {
        return "You are underage"
    }
}

console.log(checkAge(20))
console.log(checkAge(15))

// Task 5
const checkPrice = function(price) {
    if (price > 100) {
        return "Expensive"
    } else {
        return "Affordable"
    }
}

console.log(checkPrice(150))
console.log(checkPrice(80))

// Task 6
const calculate = function(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2
    } else if (operation === "-") {
        return num1 - num2
    } else if (operation === "*") {
        return num1 * num2
    } else {
        return "Invalid operation"
    }
}

console.log(calculate(10, 5, "+"))
console.log(calculate(10, 5, "*"))

// Task 7
const getGrade = function(score) {
    if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}

console.log(getGrade(85))

// Task 8
const getFinalPrice = function(price, discount) {
    return price - (price * (discount / 100))
}

console.log(getFinalPrice(100, 20))

// Task 9
const login = function(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login successful"
    } else {
        return "Invalid username or password"
    }
}

console.log(login("admin", "1234"))
console.log(login("admin", "wrongpass"))

// Task 10
const calculatePrice = function(price, quantity, discount = 0) {
    const total = price * quantity
    if (discount === 10) {
        return total - (total * 0.1)
    } else if (discount === 20) {
        return total - (total * 0.2)
    } else {
        return total
    }
}

console.log(calculatePrice(50, 2))
console.log(calculatePrice(50, 2, 10))
console.log(calculatePrice(50, 2, 20))

// Task 11
const getResult = function(name, score, bonus = 0) {
    const finalScore = score + bonus
    if (finalScore >= 90) {
        return `${name} - Excellent`
    } else if (finalScore >= 70) {
        return `${name} - Good`
    } else if (finalScore >= 50) {
        return `${name} - Passed`
    } else {
        return `${name} - Failed`
    }
}

console.log(getResult("Nika", 85, 10))
console.log(getResult("Ana", 65))
console.log(getResult("Giga", 40))

// Task 12
const calculateDelivery = function(city, distance, isExpress = false) {
    let cost = 0
    if (distance <= 5) {
        cost = 5
    } else if (distance <= 15) {
        cost = 10
    } else if (distance <= 30) {
        cost = 20
    } else {
        cost = 30
    }

    if (isExpress) {
        cost += 10
    }

    return `Delivery to ${city}: ${cost} GEL`
}

console.log(calculateDelivery("Tbilisi", 20))
console.log(calculateDelivery("Batumi", 10, true))

// Task 13
const bookTicket = function(movie, age, ticketCount = 1) {
    if (ticketCount <= 0) {
        return "Invalid ticket count"
    }

    let pricePerTicket = 15
    if (age < 12) {
        pricePerTicket = 10
    } else if (age <= 17) {
        pricePerTicket = 12
    } else {
        pricePerTicket = 15
    }

    const totalPrice = pricePerTicket * ticketCount
    return `${movie} - ${ticketCount} tickets - ${totalPrice} GEL`
}

console.log(bookTicket("Interstellar", 20, 2))
console.log(bookTicket("Batman", 10, 1))
console.log(bookTicket("Avatar", 15, 0))

// Task 14
const withdraw = function(balance, amount, fee = 2) {
    if (amount <= 0) {
        return "Invalid amount"
    }

    if (amount + fee > balance) {
        return "Not enough money"
    }

    const remaining = balance - (amount + fee)

    if (remaining > 1000) {
        return `Withdrawal successful. High balance: ${remaining}`
    } else if (remaining >= 100) {
        return `Withdrawal successful. Balance: ${remaining}`
    } else {
        return `Warning! Low balance: ${remaining}`
    }
}

console.log(withdraw(1500, 200))
console.log(withdraw(500, 200))
console.log(withdraw(100, 20))
console.log(withdraw(50, 100))
console.log(withdraw(100, 0))

// the end ;)