// task1
for (let nomeri = 1; nomeri <= 20; nomeri++) {
    console.log(nomeri)
}

// task2
for (let ukugatvla = 20; ukugatvla >= 1; ukugatvla--) {
    console.log(ukugatvla)
}

// task3
for (let luwi_nomeri = 50; luwi_nomeri <= 100; luwi_nomeri += 2) {
    console.log(luwi_nomeri)
}

// task4
let mtliani_jami = 0
for (let mtvleli = 1; mtvleli <= 100; mtvleli++) {
    mtliani_jami = mtliani_jami + mtvleli
}
console.log(mtliani_jami)

// task5
let shesatani_ricxvi = prompt("Enter number: ")
for (let nabiji = 1; nabiji <= 10; nabiji++) {
    console.log(shesatani_ricxvi + " x " + nabiji + " = " + (shesatani_ricxvi * nabiji))
}

// task6
for (let kenti_indeksi = 30; kenti_indeksi < 50; kenti_indeksi += 2) {
    console.log(kenti_indeksi)
}

// task7
for (let ukusvlis_nomeri = 100; ukusvlis_nomeri >= 20; ukusvlis_nomeri -= 3) {
    console.log(ukusvlis_nomeri)
}

// task8
let dasawyisi = 15
let dasasruli = 85

let sul_elementi = 0
let samis_jeradebi = 0
let samis_da_xutis_jeradebi = 0

for (let mimdinare = dasawyisi; mimdinare <= dasasruli; mimdinare++) {
    sul_elementi++
    if (mimdinare % 3 === 0) {
        samis_jeradebi++
    }else if (mimdinare % 3 === 0 && mimdinare % 5 === 0) {
        samis_da_xutis_jeradebi++
    }
}

console.log(sul_elementi)
console.log(samis_jeradebi)
console.log(samis_da_xutis_jeradebi)

// task9
let sawyisi_wertili = -20
let bolo_wertili = 30

let dadebiti_raodenoba = 0
let uaryofiti_raodenoba = 0
let luwi_raodenoba = 0
let yvela_ricxvis_jami = 0

for (let element = sawyisi_wertili; element <= bolo_wertili; element++) {
    yvela_ricxvis_jami = yvela_ricxvis_jami + element
    
    if (element > 0) {
        dadebiti_raodenoba++
    } else if (element < 0) {
        uaryofiti_raodenoba++
    }
    
    if (element % 2 === 0) {
        luwi_raodenoba++
    }
}

console.log(dadebiti_raodenoba)
console.log(uaryofiti_raodenoba)
console.log(luwi_raodenoba)
console.log(yvela_ricxvis_jami)

// the end;)