// task1
function checkExam(array1, array2) {
    let score = 0
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === "") {
            score = score + 0
        } else if (array1[i] === array2[i]) {
            score = score + 4
        } else {
            score = score - 1
        }
    }

    if (score < 0) {
        return 0
    }

    return score
}

// task2
function fizzbuzz(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        } else if (i % 3 === 0) {
            result.push("Fizz")
        } else if (i % 5 === 0) {
            result.push("Buzz")
        } else {
            result.push(i)
        }
    }
    return result
}

// task3
function smash(words) {
    let result = ""
    for (let i = 0; i < words.length; i = i + 1) {
        result = result + words[i]
        if (i < words.length - 1) {
            result = result + " "
        }
    }
    return result
}

// task4
var countSheep = function (num) {
    let result = ""
    for (let i = 1; i <= num; i++) {
        result = result + i + " sheep..."
    }
    return result
}

// task5
function getPlanetName(id){
    let name
    switch(id){
        case 1:
            name = 'Mercury'
            break
        case 2:
            name = 'Venus'
            break
        case 3:
            name = 'Earth'
            break
        case 4:
            name = 'Mars'
            break
        case 5:
            name = 'Jupiter'
            break
        case 6:
            name = 'Saturn'
            break
        case 7:
            name = 'Uranus'
            break
        case 8:
            name = 'Neptune'
            break
    }
    return name
}

// the end;)