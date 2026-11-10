// task1
function abbrevName(name){
let words = name.split(" ")
    let firstInitial = words[0][0].toUpperCase()
    let secondInitial = words[1][0].toUpperCase()
    
    return firstInitial + "." + secondInitial
}

// task2
function invert(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(-array[i])
    }
    return result
}

// task3
function grow(x){
    let result = 1
    for (let i = 0; i < x.length; i++) {
        result = result * x[i]
    }
    return result
}

// task4
function countBy(x, n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        result.push(x * i)
    }
    return result
}

// task5
var min = function(list){
    let smallest = list[0]
    for (let i = 1; i < list.length; i++) {
        if (list[i] < smallest) {
            smallest = list[i]
        }
    }
    return smallest
}

var max = function(list){
    let largest = list[0]
    for (let i = 1; i < list.length; i++) {
        if (list[i] > largest) {
            largest = list[i]
        }
    }
    return largest
}

// the end;)