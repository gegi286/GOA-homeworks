function displayCar(brand = 'mercedes', year = 2023, color = 'black') {
    console.log(`the ${brand} is made in ${year} and its ${color}.`)
}

console.log(displayCar("Mercedes"));
console.log(displayCar("Audi", 2022));
console.log(displayCar("Toyota", 2018, "White"));
console.log(displayCar());

// task 2
function Numbers(num1, num2) {
    return num1 > num2 ? "first is bigger" : num2 > num1 ? "second is bigger" : "equal";
}

console.log(compareNumbers(10, 5));
console.log(compareNumbers(3, 8));
console.log(compareNumbers(7, 7));

// task3
const calculatePrice = function (product, price, quantity = 1) {
    if (price <= 0) {
        return "Invalid price"
    } else if (quantity <= 0) {
        return "Invalid quantity"
    } else {
        let totalPrice = price * quantity

        if (totalPrice >= 100) {
            totalPrice = totalPrice - totalPrice * 0.1
        }

        console.log("Product: " + product)
        return "Total: " + totalPrice
    }
}

console.log(calculatePrice("Mouse", -10, 2))
console.log(calculatePrice("Keyboard", 50, 0))
console.log(calculatePrice("Book", 40))
console.log(calculatePrice("Laptop", 150, 1))