let hero = Math.floor(Math.random() * 20) + 1
let monster = Math.floor(Math.random() * 35) + 25

if (hero === 30) {
    hero = hero + 10
    console.log("გმირს დაემატება ბონუსი! ახალი ძალა: " + hero)
}

if (hero > monster) {
    console.log("გმირმა მოიგო")
} else if (monster > hero) {
    console.log("მონსტრმა მოიგო")
} else {
    console.log("ბრძოლა ფრედ მორჩა")
}