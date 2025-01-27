// object and array objects

// array objects

const myObj = [
    {
        name:'nitesh',
        email:'choudharynitesh692@gmail.com'
    },
    {
        name:'Varun',
        email:'varunsingh451@gmail.com'
    },
    {
        name:'Aakash',
        email:'aakashtomar011@gmail.com'
    }
]

console.log(myObj[1].email)
console.log(myObj[2].name)
console.log(myObj[0]['email'])

let newObj= {
    name:'nitesh',
    class:'22BCB-1-A',
    'gender':'male',
    uid:'22BCB-1-A',
    vehicle:{
        car:'Range-Rover',
        motorBike:'Ninja-Kawasaki h2',
    }
}
console.log(newObj.vehicle.car)

let myyObj  = {}

myyObj.name='nitesh'
myyObj.age=22

console.log(myyObj)

const obj1 = {a:1 , b:2}
const obj2 = {c:3 , d:4}


obj = {obj1, obj2}
console.log(obj)

// concatenation of 2 objects in a single objects using the spread method
const obj3 = {...obj1 , ...obj2}
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)

const tinderUser2 = new Object()

console.log(tinderUser2)


console.log(Object.keys(newObj))
console.log(Object.values(newObj))
console.log(Object.entries(newObj))
console.log(newObj.hasOwnProperty('gender'))
console.log(newObj.hasOwnProperty('name'))
console.log(newObj.hasOwnProperty('age'))
console.log(newObj.hasOwnProperty('uid'))

// Object destructuring
const prop ={
    car:'mercedez',
    car_no:'HP 17 B 0677',
    carModel:'2024'
}
const {carModel : year} = prop
console.log(year)

