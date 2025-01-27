// primitive Datatypes


let str = 'nitesh'
let num = 33
let bool = true
let nulll = null
let undef = undefined
let sym = Symbol('22')

console.table([str,num,bool,nulll,sym])

let sym1 = Symbol('123')
let sym2 = Symbol('123')
console.log(sym1 === sym2)

const bigInt = 2141241241241113n
console.log(typeof bigInt)


// Reference Datatype

// --> object, function and array

// array and access
let arr = ['nitesh', 'Shaktiman', 43, 'supermann', true, 2312323n]

console.log(arr)
 
// object declaration and access
let myObj = {
    name:'nitesh',
    age:21,
    gender:'male'
}

console.log(myObj.name) // access

// function declaration

function fun(){
    console.log('hlo nitesh')
}

fun()

console.log(typeof arr)
console.log(typeof myObj)
console.log(typeof function fun(){

})

console.log(typeof bool)
console.log(typeof str)


