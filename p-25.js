// spread operator
// Array
let arr1 = [10,20,30,40]
let arr2 = [50,60,70,80]

let arr3 = [...arr1, ...arr2]
console.log(arr3)

//  function 
let number = [1,2,4,6,8]
function add(a,b,c,d,e){
    return a+b+c+d+e
}

let pass = (add(...number))
console.log(pass)

// object
let obj1 = {a:1,b:2}
let obj2 = {c:3,d:4}
let obj3 = {...obj1, ...obj2}
console.log(obj3)

// string 
let my_Name = 'Nitesh'
let lastName = 'choudhary'
console.log([...my_Name, ...lastName])
console.log(...my_Name)
console.log([...my_Name])

const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Set { 1, 2, 3, 4 } (duplicates are removed)

let user = new Set([1,2,3,5,6,7,3,9])
console.log(user)

let age = 21
let message = age >=18 ? ('you are eligible for vote') : ('you cannot vote')

console.log(message)
