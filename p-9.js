// time and date in depth

// typeof date is an object 

// declaration

let myDate = new Date()
console.log(myDate)

console.log(typeof myDate)
// function methods

let Current = new Date()
console.log(Current.getDay())
console.log(Current.getDate())
console.log(Current.setDate(30) +1)
console.log(Current.getFullYear() +5)
console.log(Current.getHours())
console.log(Current.getMonth())
console.log(Current.getTime())

console.log(Current.toString())
console.log(Current.toLocaleDateString())
console.log(Current.toISOString())
console.log(Current.toDateString())
console.log(Current.toLocaleString())

let todayDate = new Date (2024,8,8,5,6,13)
console.log(todayDate.toLocaleString())

// timestamps  will bes used in project for quiz polling 

let Timestamp =  Date.now()
console.log(Timestamp)

console.log(todayDate.getTime())   // values are in milliseconds
console.log(Math.floor(Date.now()/1000))  // using math.floor the value doesn't come in decimal

let mysec = Date.now()
console.log(mysec)
let yoursec = mysec

console.log(Math.floor(yoursec/1000))


let sec1 =  Date.now()
console.log(sec1)

let sec2 = new Date()
console.log(sec2.getTime())



