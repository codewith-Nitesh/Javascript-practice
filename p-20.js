// loop and iteration

// printing the numbers

for(let i=0; i<=10 ; i++){
    console.log(i)
}

// reverse

for(let i=10; i>=0; i--){
    console.log(i)
}

// table

for(let i=5, j=0; j<=10; j++){
    console.log(i +'*'+ j +'=' +i*j)
}

// nested loop

for(let i=0; i<=10; i++){
    for(let j=0; j<=20; j++){
        console.log(i + '*' + j +'='+ i*j)
    }
}

// array iteration 

let arr = [1,2,3,4,5,6]

for(let i=0; i<=arr.length; i++ ){
    console.log(arr[i])
}

// printing pattern

for(let i=1; i<=5; i++){
    console.log(`${'*'.repeat(i)}`)
}

// printing loop

for(let i=1; i<=10; i++){
console.log('hello Everyone'+ i)
}

for(let i=0; i<=10; i++){
    if(i == 5){
        console.log('5 is the  best  number')
    }
    console.log(i)
}

// break and continue

for(let i=0; i<=10; i++){
    if(i > 6){
        break;
    }
    console.log(i)
}


// continue

for(let i=0; i<=10; i++){
    if( i == 6){
        console.log('6 will be skipped out')
        continue;
    }
    console.log(i)
}

function sumofTwo(sum1 , sum2){
    let user = sum1+sum2;
    return user
}

console.log(sumofTwo(5,5))

function hlo(){
    let userName  = ('nitesh')
    return userName
}

console.log(hlo())