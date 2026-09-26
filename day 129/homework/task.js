// task1
function greet(saxeli) {
    console.log(`Hello, ${saxeli}!`);
}

greet("Goga");
greet("Nino");

// task2
function sum(pirveliRicqvi, meoreRicqvi) {
    console.log(pirveliRicqvi + meoreRicqvi);
}

sum(10, 20);
sum(5, 7);

// task3
function showInfo(saxeli, sasaki, qalaqi) {
    console.log(`My name is ${saxeli}, I am ${sasaki} years old and I live in ${qalaqi}.`);
}

showInfo("Goga", 20, "Tbilisi");
showInfo("Ana", 25, "Batumi");

// task4
function square(ricqvi) {
    console.log(ricqvi * ricqvi);
}

square(4);
square(9);

// task5
function showProduct(saxeli, fasi, kategoria) {
    console.log(`Product: ${saxeli}`);
    console.log(`Price: ${fasi}`);
    console.log(`Category: ${kategoria}`);
}

showProduct("Laptop", 1500, "Electronics");
showProduct("Phone", 800, "Gadgets");

// task6
function checkAge(sasaki) {
    if (sasaki >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
}

checkAge(20);
checkAge(15);

// task7
function checkNumber(ricqvi) {
    if (ricqvi > 0) {
        console.log("Positive");
    } else if (ricqvi < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);

// task8
function calculate(pirveliRicqvi, meoreRicqvi, moqmedeba) {
    if (moqmedeba === "+") {
        console.log(pirveliRicqvi + meoreRicqvi);
    } else if (moqmedeba === "-") {
        console.log(pirveliRicqvi - meoreRicqvi);
    } else if (moqmedeba === "*") {
        console.log(pirveliRicqvi * meoreRicqvi);
    } else if (moqmedeba === "/") {
        console.log(pirveliRicqvi / meoreRicqvi);
    } else {
        console.log("Araswori moqmedeba");
    }
}

calculate(10, 5, "+");
calculate(10, 5, "-");
calculate(10, 5, "*");
calculate(10, 5, "/");

// task9
function checkProduct(saxeli, fasi, biujeti) {
    if (biujeti >= fasi) {
        console.log(`You can buy ${saxeli}.`);
    } else {
        console.log(`You cannot buy ${saxeli}.`);
    }
}

checkProduct("Phone", 800, 1000);
checkProduct("Laptop", 2000, 1000);

// task10
function getGrade(saxeli, qula) {
    if (qula >= 90 && qula <= 100) {
        console.log(`${saxeli} got grade A.`);
    } else if (qula >= 80 && qula <= 89) {
        console.log(`${saxeli} got grade B.`);
    } else if (qula >= 70 && qula <= 79) {
        console.log(`${saxeli} got grade C.`);
    } else if (qula >= 60 && qula <= 69) {
        console.log(`${saxeli} got grade D.`);
    } else if (qula >= 0 && qula <= 59) {
        console.log(`${saxeli} got grade F.`);
    } else {
        console.log("Araswori qula");
    }
}

getGrade("Nika", 87);
getGrade("Goga", 95);
getGrade("Luka", 55);

// the end ;)