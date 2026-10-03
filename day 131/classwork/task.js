// task1
const greet = () => {
    return 'hello guys'
}
console.log(greet())

// task2
const greet1 = name => {
    return `hello my name is ${name} and i am 16 years old`
}

console.log(greet1('luka'))
console.log(greet1('goga'))
console.log(greet1('gegi'))

// task3
const greet2 = (password, email) => {
    greet3 = (password === 123 && email === 'gegimagaria@gmail.com') ? 'login success' : 'error'
    return greet2
}

console.log(greet3())

// task4
const greet4 = (num1, num2) => num1 * num2 === 30 ? 'answer sworia' : 'tuarada ra giyo exa'

const greet5 = (num1, num2) => {
    greet5 = num1 * num2 === 30 ? 'answer sworia' : 'tuarada ra giyo exa'
    return greet5
}

console.log(greet4(3, 10))
console.log(greet5(5, 10))