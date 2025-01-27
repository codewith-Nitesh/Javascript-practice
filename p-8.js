// numbers and maths

console.log(typeof '5' + 3)
console.log(typeof '5' - 3)

console.log('nitesh' + ' choudhary' + 2.0)

let num = new Number(55)

console.log(num)

console.log(num.length)

console.log(typeof num)

const balance = new Number(400)
console.log(balance)

console.log(typeof balance)

console.log(typeof balance.toString())
console.log(typeof balance)

console.log(String(balance))
console.log(balance)


let num1 = 55
let num2 = String(num1)
console.log(typeof num2)

console.log(balance.toString().length)
console.log(balance.length)

let numm = 3131.3442
console.log(numm.toFixed(3))  // it will give you after decimal value


console.log(numm.toPrecision(3))

console.log(numm.toPrecision(4))

console.log(numm.toPrecision(6))

console.log(numm.toPrecision(10))

const bigNum = 1000000000
console.log(bigNum.toLocaleString('en-in'))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


// +++++++++++++++++++++++++ Math +++++++++++++++++++++++++

console.log(Math.abs(-5.5))

console.log(Math.round(4.5))
console.log(Math.ceil(4.2))
console.log(Math.floor(3.9))
console.log(Math.sqrt(5))
console.log(Math.max(34,14,56,25,87,90,27))
console.log(Math.min(24,63,45,78,23,10,340,1,6))
console.log(Math.pow(5))
console.log(Math.random())

let min = 5
let max = 10

console.log(Math.floor(Math.random() * (max-min +1)) + min )

