// for-of and for-in loop

// let ar = ['joker', 'Queen', 'King', 'Ace']

// for(let elements of ar){
//     console.log(elements)
// }

// let str = 'nitesh'
// for(let chr of str){
//    console.log(chr)
// }

// for of on object

// let obj={
//     username:'Nitesh',
//     age:21,
//     Uid:'22BCT10006'
// }

// for(let key of Object.entries(obj)){
//     console.log(key)
// }

// Maps

// let map = new Map()

// map.set('In', 'India')
// map.set('USA', 'United States Of America')
// map.set('IS', 'Israel')
// console.log(map)

// for(const i of map){
//     console.log(i)
// }

// for(const [key,value] of map){
//     console.log(key,':-', value)
// }

// for in loop

// let list ={
//     username:'Nitesh',
//     UID:'22BCT10006',
//     Team:'Bravo'
// }

// for(let items in list){
//     console.log(items, list[items])
// }

// let arr = ['Jaipur', 'Los-vegas', 'Shimla', 'Lucknow', 'Mumbai']

// for(let elements in arr){
//     console.log(elements)
// }


// for(let elements in arr){
//     console.log(arr[elements])
// }

// for each loop

let ob=[
    {
   Car:'mercedez',
   model:2003,
   color:'black'
   },
   {
    Car:'Audi',
    model:2016,
    color:'white'
   },
   {
    Car:'Range-Rover',
    model:2022,
    color:'gray'
   }
]

ob.forEach((items,index)=>{
    console.log(items.Car,index)
})

const ary = ['Cricket', 'kho-kho', 'Football', 'basketball', 'hockey', 'Rugby']

 ary.forEach((items)=>{
    console.log(items)
})
