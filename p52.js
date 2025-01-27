// promises

// promise are object that links the producing code and consuming code

// producing code runs after some time

// consuming code must wait till the result

let promiseone = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({
            username:'nitesh',
            surname:'choudhary'
        })
    },1000)
});

promiseone.then(function(event){
       console.log(event.username)
})

let promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let info = true
        if (!info) {
              resolve({
                username:'nitesh',
                surname:'choudhary'
              })            
        }else{
            console.log('something went wrong')
        }
    },3000)
})

promiseTwo.then(function(event){
      console.log(event)
}).catch(function(error){
    console.log(error)
})