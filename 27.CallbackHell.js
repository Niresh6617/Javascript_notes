// CallBack Hell : This is the Situation where callback is nested with another callback
//                 It is very deficult to understood the pattern
//                 It is an old pattern to work with asynchronous operation 
//                 To overcome we use promises and asyn/await 

function task1(callback){
    setTimeout(() => {
        console.log('Task1');
        callback()
    }, 2000);
}
function task2(callback){
    setTimeout(() => {
        console.log('task2');
        callback()
    }, 1500);
}
function task3(callback){
    setTimeout(() => {
        console.log('task3');
        callback()
    }, 1700);
}
function task4(callback){
    setTimeout(() => {
        console.log('task4');
        callback();
    }, 1800);
}

//To order the execution we go for callback hell
// task1(function(){
//     task2(function(){
//         task3(function(){
//             task4(()=>{
//                 console.log('all tasks are completed');
                
//             })
//         })
//     })
// })
//                         or using arrow function

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log('all task are completed');
                
            })
        })
    })
})