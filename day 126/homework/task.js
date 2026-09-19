// task1
let age = prompt("შეიყვანეთ თქვენი ასაკი:");

if (age < 0) {
    console.log("არასწორი ასაკი");
} else if (age >= 18) {
    console.log("სრულწლოვანი ხარ");
} else {
    console.log("არასრულწლოვანი ხარ");
}

// task2
let password = prompt("შეიყვანეთ პაროლი:").trim();


if (password === "") {
    console.log("პაროლი არ შეგიყვანია")
} else if (password === "javascript123") {
    console.log("სწორი პაროლია")
} else {
    console.log("არასწორი პაროლი")
}

// task3
let number = prompt("შეიყვანეთ რიცხვი:");

if (number > 0) {
    console.log("დადებითი");
} else if (number < 0) {
    console.log("უარყოფითი");
} else {
    console.log("ნული");
}

// task4
let name = prompt("შეიყვანეთ სახელი:");
name = name.trim().toLowerCase();

if (name === "goga") {
    console.log("გამარჯობა, გოგა!");
} else if (name === "admin") {
    console.log("მოგესალმები ადმინისტრატორო!");
} else {
    console.log("მომხმარებელი ვერ მოიძებნა");
}

// task5
let email = prompt("შეიყვანეთ ელფოსტა:");
email = email.trim().toLowerCase();

if (email === "admin@gmail.com") {
    console.log("ადმინისტრატორის ანგარიში");
} else if (email.endsWith("@gmail.com")) {
    console.log("Gmail-ის მომხმარებელი");
} else if (email.endsWith("@outlook.com")) {
    console.log("Outlook-ის მომხმარებელი");
} else {
    console.log("უცნობი ელფოსტის მისამართი");
}

// task6
let username = prompt("შეიყვანეთ მომხმარებლის სახელი:");
username = username.trim();

if (username === "") {
    console.log("სახელი აუცილებელია");
} else if (username.length < 3) {
    console.log("სახელი ძალიან მოკლეა");
} else if (username.length > 12) {
    console.log("სახელი ძალიან გრძელია");
} else if (username.startsWith("admin")) {
    console.log("ადმინისტრატორის სახელის გამოყენება აკრძალულია");
} else {
    console.log("მომხმარებლის სახელი მიღებულია");
}

// task7
let text = prompt("შეიყვანეთ ტექსტი:");
text = text.trim().toLowerCase();

if (text === "open sesame") {
    console.log("საიდუმლო კარი გაიღო");
} else if (text.startsWith("open")) {
    console.log("კოდი არასრულია");
} else if (text.startsWith("close")) {
    console.log("კარი დაიხურა");
} else if (text.length < 5) {
    console.log("ტექსტი ძალიან მოკლეა");
} else {
    console.log("უცნობი ბრძანება");
}

// task8
// ver gavige
// task9
let sentence = prompt("შეიყვანეთ წინადადება:");
sentence = sentence.trim();

if (sentence === "") {
    console.log("ტექსტი არ შეგიყვანია");
} else if (sentence.toLowerCase().startsWith("javascript")) {
    console.log("ეს ტექსტი JavaScript-ზეა");
} else if (sentence.length > 20) {
    console.log(sentence.slice(0, 10));
} else if (sentence.endsWith("!")) {
    console.log("ტექსტი ემოციურია");
} else if (sentence.endsWith("?")) {
    console.log("ეს შეკითხვაა");
} else if (sentence.includes("bad")) {
    console.log(sentence.replaceAll("bad", "good"));
} else {
    console.log(sentence.toUpperCase());
}

// the end;)
