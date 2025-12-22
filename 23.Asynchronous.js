// // to exectue a function in a certain period of time only once
// //1.setTimeout=>higerorder function(call back function)
// setTimeout(()=>{
//     console.log("welcome to setTimeout")
//     document.write("welcome to setTime <br>")
// },2000)

// //2.setInterval=>to execute a function in multiple time 

// setInterval(()=>{
//     console.log("welcome to setInetervals");
//     document.write("welcome to setIntervals <br>");
// },4000)

// // promises
let p=new Promise((resolve,reject)=>{
    reject("hello i rejected")
    
});
// console.log(p);
// let p1=new Promise((resolve,reject)=>{
    
//     resolve("hello i resolved")
// });
// console.log(p1);

//instead of adding 30 images in html simply use in js using asynchronous instance method
// instance methods 1) then() 2)catch() 3) finally()
function fetchUsers(){
    window.fetch("https://api.github.com/users")
    .then(response=>response.json().then(data=>{
        console.log(data);
       data.map(x=>{
        let div=document.getElementById("dataStore");
        // console.log(div);
        div.innerHTML += `
        <img src=${x.avatar_url}/>
        <h1>${x.login}</h1>
        `
       })
    }))
    .catch(error=>console.log(error.code))
    .finally(()=>console.log("i will print for both"))
    }
    fetchUsers()

// !static methods
// let p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("p1 resolved")
//     },1000)
// })
// console.log(p1);
    
// let p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("p2 resolved")
//     },2000)
// })
// console.log(p2);
 
// let p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("p3 resolved")
//     },3000)
// })
// console.log(p3);

// let p4 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("p4 resolved")
//     })
// })
// console.log(p4);

// //Promise.all([p1,p2,p3,p4]).then(x=>console.log(x)).catch(error=>console.log(error))
// //Promise.any([p1,p2,p3,p4]).then(x=>console.log(x)).catch(error=>console.log(error))
// //Promise.race([p1,p2,p3,p4]).then(x=>console.log(x)).catch(error=>console.log(error))
// Promise.allSettled([p1,p2,p3,p4]).then(x=>console.log(x)).catch(error=>console.log(error))