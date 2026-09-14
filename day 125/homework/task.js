let productPrice = 120;
let quantityy = 3;
let delivery = 15;
const shopName = "Tech Store";

productPrice *= quantityy;
productPrice += delivery;

console.log(`${shopName} order: ${productPrice} GEL`);

let orderQuantity = 1;
orderQuantity++;

console.log(typeof orderQuantity);

// task2
let score = 72;
const studentName = "Goga";

score += 8;
score *= 2;
score -= 10;
score /= 2;

console.log(`${studentName}'s final score is: ${score}`);

console.log(typeof studentName);
console.log(typeof score);

// task3
let health = 100;
let level = 1;
let coins = 50;
const player = "Warrior";

health -= 25;
coins += 40;
level++;
coins *= 2;
health /= 5;

console.log(`${player} | Level: ${level} | Health: ${health} | Coins: ${coins}`);

// task4
let price = 80;
let quantity = 4;
let discount = 20;
const currency = "GEL";

let total = price * quantity - discount;

console.log("Total: " + total + " " + currency);
console.log(`Total: ${total} ${currency}`);

console.log(typeof price);
console.log(typeof quantity);
console.log(typeof discount);
console.log(typeof currency);

// task5
let counter = 10;

counter++;
console.log(counter);

counter++;
console.log(counter);

counter += 5;
console.log(counter);

counter--;
console.log(counter);

counter *= 2;
console.log(counter);

counter /= 4;
console.log(counter);

// task6
const firstName = "Nika";
const lastName = "Beridze";
let age = 17;
let city = "Tbilisi";

console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}.`);

age++;
city = "Batumi";

console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}.`);

// task7

const accountOwner = "Ana";
let balance = 1000;

balance += 500;
balance -= 250;
balance *= 2;
balance -= 100;
balance /= 2;

console.log(`${accountOwner}'s current balance: ${balance} GEL`);

console.log("Owner type: " + typeof accountOwner);
console.log("Balance type: " + typeof balance);

// task8
const movie = "Avatar";
let ticketPrice = 25;
let tickets = 4;
let snacks = 30;

let totalCost = ticketPrice * tickets;
totalCost += snacks;
totalCost -= 10;
tickets++;

console.log(`Movie: ${movie} | Tickets: ${tickets} | Total: ${totalCost} GEL`);

// task9
let userName = "Goga";
let userAge = 20;
const studentStatus = true;
let userSalary = 1500;

console.log(`Username: ${userName}`);
console.log(`Age: ${userAge}`);
console.log(`Student: ${studentStatus}`);
console.log(`Salary: ${userSalary}`);

userAge++;
userSalary += 300;
userSalary -= 100;
userSalary *= 2;

console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof studentStatus);
console.log(typeof userSalary);

// task10
const playerName = "Luka";
let playerAge = 18;
let playerMoney = 500;
let itemCount = 3;
const storeName = "Game Store";

playerMoney -= 150;
playerMoney -= 70;
playerMoney += 200;
playerAge++;
playerMoney -= 30;

console.log(`${playerName} | Age: ${playerAge} | Shop: ${storeName} | Items: ${itemCount} | Money: ${playerMoney} GEL`);

console.log("name: " + typeof playerName);
console.log("age: " + typeof playerAge);
console.log("money: " + typeof playerMoney);
console.log("items: " + typeof itemCount);
console.log("shop: " + typeof storeName);

// task11

const clientName = "Saba";
let clientAge = 16;
let accountBalance = 250;
let productQuantity = 2;
const moneyCurrency = "GEL";
const platformName = "Digital Shop";

productQuantity += 3;
accountBalance -= 120;
accountBalance += 150;
accountBalance -= 25;
clientAge++;
accountBalance *= 2;

console.log(`User: ${clientName}`);
console.log(`Age: ${clientAge}`);
console.log(`Purchases: ${productQuantity}`);
console.log(`Balance: ${accountBalance} ${moneyCurrency}`);
console.log(`Shop: ${platformName}`);

console.log(typeof clientName);
console.log(typeof clientAge);
console.log(typeof accountBalance);
console.log(typeof productQuantity);
console.log(typeof moneyCurrency);
console.log(typeof platformName);

// the end ;)
