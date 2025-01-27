// for each loop

let ar = [1,2,3,4,5,6,7,8,9]

ar.forEach((items) => {
    console.log(items)
})

// filter  need to be store in another variable

let arr = [1,2,3,4,5,6,7,8]

let buck = arr.filter( (items) =>{
    return items > 4
})

console.log(buck)

let car = [1,2,3,4,5,6,7,8,9,10]

let bucket = car.filter((num) => (num>5))
console.log(bucket)

let nar = [1,2,3,4,5,6,7,8]
let num = []
nar.forEach( (items) => {
    if(items>4){
        num.push(items)
    }
})
console.log(num)

const books = [
    {
        title:'Bookone',
        genre:'Fiction',
        Publish:2003,
        edition:2004
    },
    {
        title:'BookTwo',
        genre:'History',
        Publish:2001,
        edition:2002
    },
    {
        title:'BookThree',
        genre:'Science',
        Publish:1993,
        edition:1996
    },
    {
        title:'BookFour',
        genre:'Non-Fiction',
        Publish:1995,
        edition:1998
    },
    {
        title:'BookFive',
        genre:'Social-Science',
        Publish:1992,
        edition:1994
    },
    {
        title:'BookSix',
        genre:'Science',
        Publish:2000,
        edition:2001
    }
]

let filtr = books.filter( (items) => {
        return (items.genre === 'Science' && items.Publish > 1990)
} )

console.log(filtr)

// map function

let lis = [10,20,30,40,50,60,70,80]

let newlis = lis.map( (elements) =>{
    return (elements+2)
}
)

console.log(newlis)

let onemore = lis.map((items) => items*2)
.map((items) => (items+3))
.map((items) => (items-2))
.filter((items) => (items>40))

console.log(onemore)

// reduce methods

let red = [1,2,3,4,5,6,7,8]

let output = red.reduce( (acc,items) => {
    return (acc+items)
},0)  // initialized from zero

console.log(output)

let course=[
    {
        courseName:'Master javascript',
        price:3000
    },
    {
        courseName:'Java',
        price:2000
    },
    {
        courseName:'Backend Devlopment',
        price:5000
    },
    {
        courseName:'full stack development',
        price:3500
    }
]

let totalSum = course.reduce((acc,totalBill) => {
    return (acc+totalBill.price)
},0)

console.log(totalSum)

