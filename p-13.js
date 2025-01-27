function one(){
    console.log('nitesh')
}

one()

function hello(){
    for (let i=0 ; i<=100; i++){
        console.log('hello', i)
    }
}

hello()

function hello(){
    for (let i=0 ; i<=100; i++){
        console.log('hello '+ i)
    }
}

hello()

let num =77
console.log(num)

function addTwonumber(num1, num2){
    const add = num1+num2
  console.log(add)
}
addTwonumber(5,6)   // argument kam krte he 

const result = addTwonumber(6,6)
console.log('result: ', result)


function addNum(num1 , num2){
    const add = num1 + num2
    return add
}
console.log(addNum(8,8))
const well = addNum(9,9)
console.log('result: ', well)


function loginUserName(username){
    console.log(`user named ${username}, just logged in`)
}

loginUserName('nitesh')

// professional way 

function userNameNitesh(username){
    if(!username){
       console.log('please log in')
       return
    } else{
        return(`${username}, just logged in`)
    }

}

console.log(userNameNitesh(''))   // undefined

console.log(userNameNitesh('Varun'))  

// rest operator can be used to hold multiple values 

function calculateeCardPrice(val1, val2, ...num){
    return(num)
}

console.log(calculateeCardPrice(400,600,545,452,2323,242))


// way of passsing the object as argument

let Obj = {
    username:'nitesh',
    uid:"22BCT10006"
}

function accessObj(object){
    return (`helo my name is ${object.username} and this is a way to use use object as argument`)
}

console.log(accessObj(Obj))

let arr = [1,2,3,4,5,6,'nitesh',8,9]

function myarr(arrr){
    return arrr[2]
}
console.log('printing the value present at 2nd index',(myarr(arr)))

