// if conditions

let score = 75.2

if(score>75){
    console.log('congrats you passed with A1 grade')
}else{
    console.log('you need to improve more')
}

let goal = 7
if(goal>8){
    console.log('congrates you are excellent player')
}
else if(goal>6){
    console.log('you are a good player')
}
else if(goal>4){
    console.log('you are an Average player')
}
else if(goal>1){
    console.log('you are below average player')
}else{
    console.log('you are not a player')
}

let jar = 7
if(jar>=7){
    console.log(true)
}else{
    console.log(false)
}

let wrd1 = 'nitesh'
let wrd2 = 'hitesh'

if(wrd1.length == wrd2.length){
    console.log('they both are equal')
}else{
    console.log('they both are not equal')
}

let speed = 360

if(speed>350){
    let speedify = 200
    console.log(`the speed of vehicle is ${speedify}`)
}else if (speed > 100){
    console.log('raftar')
}

// && --> and (all stmt are true) and or --> (gives true if one condition is true)

let cond1 = true
let cond2 = true
let cond3 = false

if(cond1 && cond2 ){
    console.log(true)
}else{
    console.log(false)
}

if(cond1 || cond3){
    console.log(true)
}else{
    console.log(false)
}

// Nullishing colosense operator
let num1;

num1 = null ?? 10

console.log(num1)

// Ternary operator
let weight =60

weight <40 ?  console.log('condition is true') : console.log('condition is false')


let marks = 70

switch(true){                     // use true if you need to compare the expression in switch stmt
    case (marks>60): 
    console.log('u are good to go')
    break;
    case (marks>40):
    console.log('u are not good to go')
    break;
    default:
    console.log('you need to know about subjects')
    break;
}

let userEmail = 'xyz@gmail.com'

if(userEmail == true){
    console.log(true)
}else{
    console.log(false)
}

if(userEmail){
    console.log('got the value')
}else{
    console.log("didn't got the value")
}

let othermail = ''

if(othermail){
    console.log('got the mail')
}else{
    console.log('didnt got the mail')
}

let othermail1 = ' '

if(othermail1){
    console.log('got the mail')
}else{
    console.log('didnt got the mail')
}

// falsey value --> 0,-0,null,undefined,NaN,false 
/// truthy value --> {}, [], '0' , 'false', 'truth', (function naam(){}) ," "

let arr = []

if(arr.length === 0){
    console.log('it is empty array')
}
else{
    console.log('not empty array')
}

let obj = {}

if(Object.keys(obj).length === 0){
    console.log('it is an empty object')
}else{
    console.log('it is an non empty object')
}

console.log(Object.keys(obj))