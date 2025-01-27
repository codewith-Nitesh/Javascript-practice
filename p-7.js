// injecting the variables 

let myName = 'nitesh'
let myAge = 21
let myDestination = 'Delhi to PaontaSahib'

console.log(`hi my name is ${myName} and my age is ${myAge} and my destination is ${myDestination}`)

// way to declare the string operation

const newGame = new String('BattleField4')
// function methods of string

console.log(newGame[0])  /// to check which char is present at which index

console.log(newGame.charAt(3))  // to check the char position
console.log(newGame.__proto__)

console.log(newGame.indexOf('F'))

console.log(newGame.toLowerCase())
console.log(newGame.toLocaleLowerCase())
console.log(newGame.toUpperCase())

console.log(newGame.substring(0,4))  // it will only print the text from index 0 to 4

console.log(newGame.replace('4','5'))  

console.log(newGame.includes('battle'))
console.log(newGame.includes('Battle'))

console.log(newGame.split(" "))

let dang = new String('my name is nitesh')
console.log(dang.split(' '))
console.log(dang.split(''))
console.log(dang.split())

let trim = new String('      choudhary         ')

console.log(trim.trim())
console.log(trim.trimStart())
console.log(trim.trimEnd())


let slice = new String('my name is nitesh')
console.log(slice.slice(1,4))


console.log(trim.length)


