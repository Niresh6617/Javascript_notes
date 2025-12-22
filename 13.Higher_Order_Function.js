// function task(x,y){
//     console.log(x+y);
// }
// function fun(x,y,fun1){
//     return fun1(x,y)
// }
// fun(3,4,task);
//o/p => 7


// ////////////Higer Order Function Methods => map() filter() and reduce()//////////////////
let arr=[50,80,45,69,32,71]
console.log(arr);

let filteredArr=arr.filter((val,ind)=>{
    if(val<35)
    return val;
})
console.log(filteredArr);

// //Map() Method=>it affect all the value in the array
// let mappedArr=arr.map((val,ind)=>{
//     val=val+1;
//     return val
// })
// console.log(mappedArr);

// //reduce() Method=> it return a single value
let reducedArr=arr.reduce((accum,val)=>{
    accum=accum*val
    return accum
},2)
console.log(reducedArr);

// //another way  
// let funt1= (accum,val)=>{
//     accum=accum*val
//     return accum;
// }
// let reducedarr1=arr.reduce(funt1,2);
// console.log(reducedarr1);


// //example-2
// let booksprice=[900,826,631,455,232,595,777];
// let mappedprice= booksprice.map((val,ind)=>{
//     val=val+150;
//     return val;
// })
// console.log(mappedprice);
// let filteredprice=mappedprice.filter((val,ind)=>{
//     if(val<1000)
//     {
//         return val
//     }
// })
// console.log(filteredprice);
// let totalprice=filteredprice.reduce((accum,val)=>{
//     accum=accum+val;
//     return accum;
// })
// console.log(` price after filter ${totalprice}`);


// //Filter() Method
// let filteredArr=arr.filter((val,ind)=>{
//     if(val>50)
//     {
//         console.log(ind);
//         return val;
        
//     }
// })
// console.log(filteredArr);


