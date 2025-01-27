// datatype conversions and confusion

let age = 33
console.log(typeof age)
console.log(typeof (age))

let num1= 33
console.log(num1)

let anotherNumber = String(num1)
console.log(anotherNumber)
console.log(typeof anotherNumber)


let str = '3344'
let num2 = Number(str)
console.log(str)
console.log(typeof num2)

let nula  = null
let num3 = String(nula)  //string
console.log('e')
console.log(num3) //null
console.log(typeof num3)



let undef = undefined
let num5  = String(undef)
console.log('r')
console.log(typeof num5)

let bula  = null
let num4 = Number(bula)  // 0
console.log('t')
console.log(num4)
console.log(typeof num4)



let sakhtlonda = true
console.log(typeof sakhtlonda)

let bool = false
let cool = Number(bool)
console.log(typeof cool)

let isLoggedIn = 1
let anotherLoggedIn = Boolean(isLoggedIn)
console.log(anotherLoggedIn)


// ++++++++++++++++++++ operation +++++++++++++++++++++

let  value = 9
 console.log(-(value))
 console.log(+(value))

 // arithmetic operations

 console.log(5+5)
 console.log(5-5)
 console.log(5*5)
 console.log(5**5) // 5 raise to power 5
 console.log(5%5)
 console.log(5/5)

 let a = 'Nitesh'
 let b = 'choudhary'
 console.log(a+ b)

 //  rules 

 console.log('1'+2+'5')
 console.log('4'+'5'+'3')
 console.log(3+'4'+'5')
 console.log(4+5+'6')

 console.log((3+4) * (10-3) / (9+7)) // making code more clean, concise and readable

 console.log(+true)
console.log(-true)
console.log(+false)
console.log(+"");
console.log("");

let sum1 = 100
let another_sum1 = sum1
console.log(++another_sum1)

let sum2  = 100
let another_sum2 = sum2
console.log(another_sum2++)
console.log(another_sum2)

let  sub = 100
let another_sub = sub
console.log(--another_sub)

let  sub1 = 100
let another_sub1 = sub1
console.log(another_sub1--)
console.log(another_sub1)



