// arrow function and its uses 

let hlo =() => {
    console.log('hello ji')
}

 // object function method and this keyword usage 


 const user = {
    username:'nitesh',
    UID : '22BCT10006',

    newMessage: function(){
         return(`hi my name is ${this.username}, and my uid is ${this.UID}`)
    }
 }

 
console.log(user.newMessage())
// arroe function
const whisky = ()=>{
    console.log('i love whisky')
    console.log(this)
}

whisky()


const addTwo = (num1,num2) =>{
    return (num1 +num2)
}
console.log(addTwo(5,5))

// implicit type return function 

const ret = (num1 ,num2) => (num1+num2)

console.log(ret(4,4))

// with object declaration

const ob = (username) => ({username:'nitesh'})
console.log(ob())



const arr = (arra) => ([1,2,3,4,5,6])
console.log(arr())

