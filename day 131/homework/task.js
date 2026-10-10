// task1
const greet = saxeli => `Hello, ${saxeli}!`

console.log(greet("Nika"))

// task2
const calculatePrice = (fasi, raodenoba, fasdakleba) => fasdakleba >= 20 ? fasi * raodenoba * (1 - fasdakleba / 100) : fasi * raodenoba

console.log(calculatePrice(100, 3, 20))

// task3
const calculateSalary = (xelfasi, bonusi) => bonusi > 500 ? xelfasi + xelfasi * 0.1 : xelfasi

console.log(calculateSalary(2000, 600))
console.log(calculateSalary(2000, 300))

// task4
const getAgeCategory = asaki => asaki <= 12 ? "Child" : asaki <= 17 ? "Teenager" : asaki <= 59 ? "Adult" : "Senior"

console.log(getAgeCategory(15))
console.log(getAgeCategory(25))
console.log(getAgeCategory(70))

// task5
const checkExam = (qula, maqsimaluriQula) => {
    const procenti = (qula / maqsimaluriQula) * 100
    if (procenti >= 90){
        return "Excellent"
    }else if (procenti >= 75){
        return "Very Good"
    }else if (procenti >= 60){
        return "Passed"
    }else{
        return "Failed"
    }
}

console.log(checkExam(45, 50))
console.log(checkExam(32, 50))

// task6
const withdraw = (balansi, tanxa) => {
    if (tanxa <= 0){
        return "Invalid amount"
    }else if (tanxa > balansi) {
        return "Not enough money"
    }else{
        return balansi - tanxa
    }
}

console.log(withdraw(1000, 300))
console.log(withdraw(1000, 1500))
console.log(withdraw(1000, 0))

// task7
const checkPassword = paroli => paroli.length < 8 ? "Too short" : "Valid password"

console.log(checkPassword("hello"))
console.log(checkPassword("javascript"))

// task8
const getOrderPrice = (fasi, raodenoba, mitsodeba) => fasi * raodenoba + (mitsodeba === "express" ? 15 : 5)

console.log(getOrderPrice(100, 3, "standard"))
console.log(getOrderPrice(100, 3, "express"))

// task9
const calculateFinalPrice = (fasi, raodenoba, fasdakleba, wevria) => (fasi * raodenoba * (1 - fasdakleba / 100)) * (wevria ? 0.9 : 1)

console.log(calculateFinalPrice(100, 3, 20, true))

// task10
const roundNumber = ricxvi => Math.round(ricxvi)

console.log(roundNumber(5.6))
console.log(roundNumber(5.4))

// task11
const floorNumber = ricxvi => Math.floor(ricxvi)

console.log(floorNumber(5.9))
console.log(floorNumber(8.2))
console.log(floorNumber(12.99))

// task12
const ceilNumber = ricxvi => Math.ceil(ricxvi)

console.log(ceilNumber(5.1))
console.log(ceilNumber(8.2))
console.log(ceilNumber(12.01))

// the end :)