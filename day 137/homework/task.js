// task1
let products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"];
products.unshift("Mouse");
products.push("Headphones", "Speaker");
let removedProduct = products.shift();
let monitorIndex = products.indexOf("Monitor");
let tabletIndex = products.indexOf("Tablet");
products.splice(tabletIndex, 1, "Smartwatch");
let slicedArray = products.slice(2, 5);
let joinedString = products.join(" | ");

console.log("საბოლოო მასივი:", products);
console.log("წაშლილი პროდუქტი:", removedProduct);
console.log("Monitor-ის ინდექსი:", monitorIndex);
console.log("მიღებული სტრიქონი:", joinedString);

// task2
let text = "HTML,CSS,JavaScript,React,Node.js,Python";
let techArray = text.split(",");
techArray.unshift("Git");
techArray.push("TypeScript");
let reactIndex = techArray.indexOf("React");
let cssIndex = techArray.indexOf("CSS");
techArray.splice(cssIndex, 2);
let firstFour = techArray.slice(0, 4);
let techString = firstFour.join(" - ");
let finalTechArray = techString.split(" - ");

console.log("ტექნოლოგიების მასივი:", techArray);
console.log("React-ის ინდექსი:", reactIndex);
console.log("პირველი ოთხი ტექნოლოგიის სტრიქონი:", techString);
console.log("საბოლოო მასივი:", finalTechArray);

// task3
let students = ["Nika", "Ana", "Gio", "Mariam", "Luka", "Saba", "Elene"];
students.unshift("Data", "Tako");
students.pop();
let mariamIndex = students.indexOf("Mariam");
let gioIndex = students.indexOf("Gio");
students.splice(gioIndex, 2);
let lukaIndex = students.indexOf("Luka");
students.splice(lukaIndex, 0, "Irakli");
let lastFour = students.slice(-4);
let extendedStudents = lastFour.concat(["Giorgi", "Salome"]);
let studentsString = extendedStudents.join(", ");
let studentsBackToArray = studentsString.split(", ");
let isAnArray = Array.isArray(studentsBackToArray);

console.log("სტუდენტების საბოლოო მასივი:", students);
console.log("Mariam-ის ინდექსი:", mariamIndex);
console.log("ახალი გაფართოებული მასივი:", extendedStudents);
console.log("მიღებული სტრიქონი:", studentsString);
console.log("არის თუ არა მასივი?:", isAnArray);

// task4
let scores = [45, 78, 92, 34, 88, 67, 100, 56];
scores.unshift(50);
scores.push(73, 85);
let score92Index = scores.indexOf(92);
let index34 = scores.indexOf(34);
scores.splice(index34, 1);
let index88 = scores.indexOf(88);
scores.splice(index88, 1);
let index67 = scores.indexOf(67);
scores.splice(index67, 1, 70);
let midpoint = Math.floor(scores.length / 2);
let secondHalf = scores.slice(midpoint);
let combinedScores = secondHalf.concat([95, 81, 60]);
combinedScores.pop();
combinedScores.unshift(99);
let scoresString = combinedScores.join(" / ");
let scoresFinalArray = scoresString.split(" / ");

console.log("საბოლოო ქულების მასივი:", scoresFinalArray);
console.log("არის თუ არა მასივი?:", Array.isArray(scoresFinalArray));

// task5
let groups = [["Nika", "Ana", "Gio"], ["Mariam", "Luka"], ["Saba", "Elene", "Data"]];
let flatGroups = groups.flat();
flatGroups.unshift("Tako");
flatGroups.push("Irakli", "Salome");
let lukaIdx = flatGroups.indexOf("Luka");
let gioIdx = flatGroups.indexOf("Gio");
flatGroups.splice(gioIdx, 1);
let mariamIdx = flatGroups.indexOf("Mariam");
flatGroups.splice(mariamIdx, 1);
let firstFive = flatGroups.slice(0, 5);
let finalGroupList = firstFive.concat(["Giorgi", "Sandro"]);
let groupsString = finalGroupList.join(" * ");
let groupsBackToArray = groupsString.split(" * ");

console.log("თავდაპირველი groups მასივი:", groups);
console.log("საბოლოო მასივი:", groupsBackToArray);

// the end ;)