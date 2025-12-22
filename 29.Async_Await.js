// Async/Await: 
// Async function makes sure return a promise
// Await will make the  async function wait for the  promise 

function walkingDog(){
    return new Promise((resolve,reject)=>{
        // asynchronous function
        setTimeout(() => {
            let walkingDog = true
            if(walkingDog){
                resolve("I took the dog for a walk 🐕‍🦺")
            }
            else{
                reject("You didn't take the dog for a walk 😡")
            }
        }, 3000);
    })
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let cleanKitchen =true
            if(cleanKitchen){
                resolve('I Finished cleaning the Kitchen 🧹')
            }
            else{
                reject("You Didn't clean the kitchen 👿")
            }
        }, 2000);
    })
}
function trashOut(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            let trashOut = true
            if(trashOut){
                resolve('I took the trash out ♻')
            }
            else{
                reject("You Didn't Took the trash Out 😠")
            }
        }, 1500);
    })
}
// // This promise method chaining using then and catch method 
// walkingDog().then((value)=> {console.log(value); return cleanKitchen()})
//             . then((value)=>{console.log(value); return trashOut()})
//             .then((value)=>{console.log(value); 
//                 setTimeout(() => {
//                     console.log('Ive done all the work');
                    
//                 }, 2000);
//             })

// Sync and Await
//why we use try/catch()method : To handle the errors 
async function doChores(){
    try{
        const walkingDogResult = await walkingDog()
        console.log(walkingDogResult);

        const cleanKitchenResult = await cleanKitchen()
        console.log(cleanKitchenResult);

        const trashOutResult = await trashOut()
        console.log(trashOutResult);
        
        setTimeout(() => {
            console.log("I've Done all the Chores ");
        }, 2000);
    }
    catch(error){
        console.log(error);
    }
    
    
}
//function call
doChores()

const name='Niresh';
age =23;
console.log(age);
age = [23,21,22]
console.log(name);
console.log(age);





// sample async and await program
async function information(name,age,location){
    var infoname =await name ;
    var infoage =await age;
    var infoloc =await location
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve("This is "+ infoname+" and my age is "+infoage+" living in "+infoloc);
        }, 2000);
    })
}

async function promiseStaisfied(){
    try{
        const callinformation = await information("niresh",23,"chennai")
        console.log(callinformation);
        
    }
    catch(error){
        console.error(error)
    }
}
promiseStaisfied()
 