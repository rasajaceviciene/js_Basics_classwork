//1
 
let age = 11;
if (age % 2 == 0){
    console.log(`Amzius yra lyginis`);
}else{
    console.log(`Amzius yra nelyginis`)
}

//2

let isWarmToday = false;
if(isWarmToday == true){
    console.log(`Eikime i lauka`);
}else{
    console.log(`Geresnis pasirinkimas - likti namuose`)
}

//3

let game = "neMinecraft";
if (game == "Minecraft"){
    console.log(`Tai puikus pasirinkimas`);
}else{
    console.log(`Ar bandei zaisti Minecraft?`)
}

//4

let numbers = [10, 12, 14];
console.log(numbers[1]);
if (numbers[0] > numbers[2]){
    console.log(`Pirmasis skaicius didesnis`);
}else{
    console.log(`Treciasis skaicius didesnis arba lygus`)
}

//5

let movie = {
    movieTitle: "Kiti",
    movieDuration: 140
}
if(movie.movieDuration > 120){
    console.log(`Tai ilgas filmas`);
}else{
    console.log(`Tai trumpas filmas`)
}

//6

let hasTicket = false;
let isSeatAvailable = true;

if(hasTicket == true && isSeatAvailable == true){
    console.log(`Galite uzimti vieta`);
}else{
    console.log(`Negalite uzimti vietos`)
}

//7

let friends = ["Tomas", "Jonas", "Lukas"];
if(friends[2] == "Lukas"){
    console.log(`Lukas yra tavo draugas!`);
}else{
    console.log(`Koks tas trecias draugas?`)
}

//8

let user = {
    userName: "Milda",
    preferredFruit: "Obuolys"
}
if(user.preferredFruit == "Obuolys"){
    console.log(`Sveika mityba!`);
}else{
    console.log(`Visada yra vietos obuoliui!`)
}

//9

let numberOne = 6;
let numberTwo = 4;
if(numberOne < numberTwo){
    console.log(`Pirmas skaicius mazesnis`);
}else if(numberOne === numberTwo){
    console.log(`Skaiciai lygus`);
}else{
    console.log(`Pirmas skaicius didesnis`)
}

//10

let customers = [
    {
        customerName: "Vaiva",
        customerAge: 15
    },
    {
        customerName: "Vytas",
        customerAge: 18
    },
    {
        customerName: "Alius",
        customerAge: 20
    }
]
if (customers[0].customerAge < 18){
    console.log(`Vaikas`);
}else{
    console.log(`Suauges`)
}