let num = prompt("Enter your number: ")
switch(true){
    case num > 0 && num % 2 == 0:
        console.log("positive even")
        break
    case num > 0 && num % 2 == 1:
        console.log("positive odd")
        break
    case num < 0 && num % 2 == 0:
        console.log("negative even")
        break
    case num < 0 && num % 2 == 1:
        console.log("negative odd")
        break
    default:
        console.log("zero")
        break
}

// task2
function sayMyInfo(){
    console.log("my name is Gegi,my surname is Tchkadua, i am 16 years old and i live in tbilisi")
}
sayMyInfo()
sayMyInfo()
sayMyInfo()

// task3
function myNAME(name, surname, parchusPrice){
    console.log(`hello my name is ${name} my surname is ${surname} and parchusPrice is ${parchusPrice} !`)
}

myNAME("goga","chalauri", 67 )
myNAME("goga","chalauri", 67 )
myNAME("goga","chalauri", 67 )