// array in javascript

let arr = [1,2,3,4,5,6]
let arr2 = arr
arr2=[1,2,3,4,'nitesh',5,6]
console.log(arr)
console.log(arr2)

console.log(arr2[4])

let newArr = [1,2,3,'nitesh',4,5,'choudhary', true,null]
console.log(newArr.length)

// good way for declaration

let newArrr  = new Array (1,2,3,4,5,'nitesh',6,7,8)
console.log(newArrr)

newArrr.push(5)
console.log(newArrr)

newArrr.pop()
console.log(newArrr)

newArr.pop()
console.log(newArrr)

newArrr.unshift(0,5)
console.log(newArrr)

newArrr.shift()
console.log(newArrr)

console.log(newArr.includes('nitesh'))

console.log(newArrr.indexOf('nitesh'))

let newAr = [9,10,11,'nitesh','varun',12,11,15]
console.log(newAr)

let newA = newArrr.join()
console.log(newArrr)
console.log(newA)

console.log(newArrr.join())

// slice or splice method

console.log(newAr.slice(0,5))

console.log(newAr.splice(0,3))

let marr = newAr
console.log(marr.splice(2,4))