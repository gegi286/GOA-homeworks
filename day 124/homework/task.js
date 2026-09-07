// task1
/* var (ძველი ყუთი): ადრე გამოიყენებოდა. ამ ყუთში რასაც ჩადებ, შეგიძლია მოგვიანებით გადააკეთო ან საერთოდ იგივე სახელის ყუთი ხელახლა შექმნა. დღეს ნაკლებად იყენებენ, რადგან ხშირად აბნევს კოდს.

let (თანამედროვე ცვალებადი ყუთი): გამოიყენება მაშინ, როცა იცი, რომ ყუთში შიგთავსი მომავალში შეიცვლება (მაგალითად: ქულები თამაშში). ხელახლა იმავე სახელით ვერ შექმნი, მაგრამ შიგნით რამის შეცვლა შეგიძლია.

const (თანამედროვე მუდმივი ყუთი): გამოიყენება მაშინ, როცა შიგთავსი არასდროს არ უნდა შეიცვალოს (მაგალითად: დაბადების წელი). მასში ერთხელ ჩადებ რაღაცას და მორჩა, ვერც შეცვლი და ვერც გადააშენებ. */

// task2
let num1 = 10;
let num2 = 5;

let mimateba = num1 + num2;
let gamokleba = num1 - num2;
let gamravleba = num1 * num2;
let gayofa = num1 / num2;
let nashti = num1 % num2;
let xarisxi = num1 ** num2;

console.log(mimateba);
console.log(gamokleba);
console.log(gamravleba);
console.log(gayofa);
console.log(nashti);
console.log(xarisxi);

// task3
const sakheli = "Goga";
const gvari = "Chalauri";
const misamarti = "Tbilisi";
const qveyana = "Georgia";

let teqsti = "my name is " + sakheli + " my surname is " + gvari + " and i live in " + misamarti + ", " + qveyana;

console.log(teqsti);

// task4
let sakhelii = "   Goga   ";
let shedegi = sakhelii.trim().toUpperCase();

console.log(shedegi);

// task5
let teqstii = "   GOGA CHALAURI   ";
let shedegii = teqstii.trim().toLowerCase();

console.log(shedegii);

// task6
let text = "   Hello,   my name is Goga.   ";
let cleanedText = text.trim().replace("Hello", "Hi");

console.log(cleanedText);

// task7
let message = "JavaScript is hard. JavaScript is interesting. I love JavaScript.";
let newMessage = message.replaceAll("JavaScript", "JS");

console.log(newMessage);

// task8
let password = "Goga12345";

let nawili = password.slice(0, 2);
let pharva = "*".repeat(password.length - 2);

let koduriSityva = nawili + pharva;

console.log(koduriSityva);

// task9
let username = "   GogaChalauri   ";

let sufta = username.trim();
let mokle = sufta.slice(0, 5);

console.log(mokle);

// task10
let texti = "I like cats. Cats are cute. My cat is sleeping.";
let axaliTeqsti = texti
    .replaceAll("cats", "dogs")
    .replaceAll("Cats", "Dogs")
    .replaceAll("cat", "dog");

console.log(axaliTeqsti);

// task11
let sentence = "JavaScript is one of the most popular programming languages";

let motrili = sentence.slice(0, 25);
let saboloo = motrili + "...";

console.log(saboloo);

// task12
let code = "AB-12-CD-34";

let shecvlili = code.replaceAll("-", "*");
let shedegiiii = shecvlili.slice(0, -2) + "##";

console.log(shedegiiii);

// task13
let email = "   goga.chalauri@gmail.com   ";

let suftaa = email.trim();
let momxmarebeli = suftaa.slice(0, 13);
let sabolooo = momxmarebeli.replace(".", "_");

console.log(sabolooo);

// task14
let input = "   Hello!!! My name is Goga!!! I love JS!!!   ";

let dasuftavebuli = input.trim();
let shecvlilii = dasuftavebuli.replaceAll("!!!", "!");
let tamasuki = shecvlilii.slice(0, 20);
let dasasrubeli = tamasuki + "...";

console.log(dasasrubeli);

// task15
let phone = " +995-599-12-34-56 ";

let wmendili = phone.trim();
let gasuptavebuli = wmendili.replaceAll("-", "");
let boloNawili = gasuptavebuli.slice(-9);

console.log(boloNawili);

// task16
let tecsti = "JavaScript is awesome";
let sigrhe = tecsti.length;

console.log(sigrhe);

// task17
let textiii = "   JavaScript is GREAT!!! JavaScript is POWERFUL!!!   ";

let dzrava = textiii.trim();
let karobka = dzrava.replaceAll("JavaScript", "JS");
let buferi = karobka.replaceAll("!!!", "!");
let dinamiki = buferi.slice(0, 30);
let glushiteli = dinamiki + "...";

console.log(glushiteli);

