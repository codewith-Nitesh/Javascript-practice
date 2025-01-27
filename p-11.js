
// object topic practice
let myObj = {
    name:'nitesh',
    class:'22-BCB-1',
    UID: '22BCT10006',
    age:21,
    isLoggedIn:false
}
console.log(typeof myObj)

console.log(myObj)

Object.create // constructor singleton  object declaration

// to access the information

console.log(myObj.UID)
console.log(myObj.isLoggedIn)

yourObj={
    name:'varun',
    'gender':'male',
    class:'22BCB-1-A'
}
console.log(yourObj)
console.log(yourObj.gender)
console.log(yourObj.class='22BCB-1-B')
console.log(yourObj)

// freeze method used to free the object

// Object.freeze(yourObj)
yourObj.name='Nitesh'
console.log(yourObj)

// function is treated as type 1 citizen 

yourObj.greeting = function(){
    console.log('hlo js user');
}

console.log(yourObj.greeting)
console.log(yourObj.greeting())

yourObj.greetingTwo = function(){
    console.log(`this is me , ${this.name}`);
}

console.log(yourObj.greetingTwo())
console.log(yourObj.greetingTwo)

const my_Sym = Symbol('key1')

let newObj = {
    name:'Ashyam',
    class:'22BCB-1-A',
    'gender':'male',
    [my_Sym] : 'myKey1'
}

console.log(newObj['name'])  // string format access
console.log(newObj['class'])
console.log(newObj['gender'])
console.log(newObj[my_Sym])
console.log(typeof newObj[my_Sym])

console.log(typeof newObj.my_sym)
console.log(newObj[my_Sym])