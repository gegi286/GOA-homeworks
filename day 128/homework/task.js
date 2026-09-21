// task1
let userAge = 20;
let ageStatus = userAge >= 18 ? "Adult" : "Minor";

// task2
let countNumber = 15;
let parityResult = countNumber % 2 === 0 ? "Even" : "Odd";

// task3
let visitorAge = 20;
let holdsPass = true;
let entryStatus = (visitorAge >= 18 && holdsPass) ? "Allowed" : "Not Allowed";

// task4
let clientAge = 16;
let holdsStudentCard = true;
let discountStatus = (clientAge < 18 || holdsStudentCard) ? "Discount" : "No Discount";

// task5
let personAge = 20;
let isEnrolled = true;
let lifeStage = personAge < 13 ? "Child" : personAge < 18 ? "Teenager" : isEnrolled? "Student" : "Adult";

// task6
let currentScore = 75;
let isPremiumMember = true;
let playerRank = currentScore < 50 ? "Beginner" : currentScore < 80 ? "Intermediate" : isPremiumMember ? "Pro" : "Advanced";

// task7
let guestAge = 19;
let hasValidTicket = true;
let isVipGuest = false;
let accessLevel = guestAge < 18 ? "Too Young" : !hasValidTicket ? "No Ticket" : isVipGuest ? "VIP Entrance" : "Normal Entrance";

// the end ;)