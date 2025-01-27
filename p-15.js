function one (){
    console.log('this is function 1')
    const key = 'hello g'

    function two(){
        const username2 = 'this is username2'
        console.log('this is function 2')
    }
    // console.log(username1)
    two()
    console.log(key)
}
one()

if(true){
    const username = 'nitesh'
    if(username === 'nitesh'){
        console.log(true)
    }
    else{
        console.log(false)
    }
    console.log(username)
    console.log(`${this.username}`)
}
// console.log(username)


fun()
function fun(){
    console.log('hy how are you')
}

fun()

const hold = function (num){   // variable act as reference to the function here
    return num +2
}

console.log(hold(5))
console.log('Hello Developers, lets Connect')
