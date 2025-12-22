//for methods =>only used with array
//for in methods => gives index of an array
let arr=[10,20,30,40,50];
for(let ind in arr)
{
    console.log(ind);
}

//for of methods =>it seprate and initialize each value in an array
for(var val of arr)
{
    console.log(val);
}
console.log(`the value of val is ${val}`);//while declaring val in let it wont compile out side of the loop so declare the val in variable keyword

//for each method => it combines both for in and for of methods in array => it completly differ with for in and for of method
arr.forEach((val,ind)=>{
    console.log(`${val} is the index of ${ind}`);
})




//example-2(same)
let arr1=[10,"Nriesh",1.0,'D']
//for in method=> it returns index value of an array
for(let ind in arr1)
{
    console.log(ind);
}
//for of method =>it seperate the array and assign the value
for(let val of arr1)
{
    console.log(val);
}
//for each method =>it isa high order function it is a combination of both in and of for mrthod
arr1.forEach((val,ind) => {
    console.log(`${val} value of index is ${ind}`);
});

