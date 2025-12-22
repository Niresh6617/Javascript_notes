// Promises: It is an Object that manage the Asynchronous function
//           It Wrap the promise Object around the {asynchronous code}
//           "I promise to return a value "
//            PENDING => {RESOLVED , REJECTED}
// Syntax    new promise((resolve , reject )=>{Asynchronous Code})

// Example Mom has to complete some of Chores 
// walk the dog
// Cleaning Kitchen
// Take Out the Trash

// To overcome the callback hell we go for Promises
function walking(){
    return new Promise((resolve , reject)=>{
        let walking = true;
        if(walking){
            setTimeout(() => {
                resolve("Walking the Dog 🐕");
            },3000);   
        }
        else{
            reject("You Didn't take a Dog for a walk 😡")
        }
    })
    
}
function cleanKitchen(){
    return new Promise((resolve , reject)=>{
        let cleanKitchen = true;
        if(cleanKitchen){
            setTimeout(() => {
                resolve("Cleaning the Kitchen 🧹");
            }, 2000);
        }
        else{
            reject("You Didn't Clean the Kitchen 👼")
        }
    })
}
function trashOut(callback){
    return new Promise((resolve , reject)=>{
        let trashOut = true
        if(trashOut){
            setTimeout(() => {
                resolve('Take Out The Trash 🚮');
            }, 1500);
        }
        else{
            reject("You Didn't take out the Trash 👿")
        }
    })
}
// this can achive by using method Chaining (.then() and .catch())
walking().then(value => {console.log(value); return cleanKitchen()})
         .then(value =>{console.log(value); return trashOut()})
         .then(value =>{console.log(value); console.log('over')})
         .catch(error =>{console.error(error)})

// simple promise this will return pending follows resolve and reject function
let promise = new Promise((resolve , reject)=>{
    resolve('Hello this is Promise resolve')
});
console.log(promise);


//callback function 
// function walking(callback){
//     setTimeout(() => {
//         console.log('Walking the Dog');
//         callback()
//     },3000);    
// }
// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("Cleaning the Kitchen");
//         callback()
//     }, 2000);
// }
// function trashOut(callback){
//     setTimeout(() => {
//         console.log('Take Out The Trash');
//         callback()
//     }, 1500);
// }


// walking(()=>{
//     cleanKitchen(()=>{
//         trashOut(()=>{
//             setTimeout(() => {
//                 console.log('Mom all Chores are Completed');
//             }, 1000);

//         })
//     })
// })