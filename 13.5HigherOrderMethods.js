// Higher order function methods are map() filter() and reduce()
// map() this method is used to transform every value in an array
//                     (or)
// map() this method is used to affect the value in an array
//example
let arr1 = [5,4,3,2,1] 

function double(x){
    console.log(x);
    console.log(typeof(x));
    return x*2
}
let output = arr1.map(double)
console.log(output);

function triple(x){
    console.log(x);
    console.log(typeof(x));
    
    return x*3
}
let output1 = arr1.map(triple)
console.log(output1);

// To find the given array into binary form
// toString(base) this method is used to convert the the number into binary format using base value 2

let output2 = arr1.map((x)=>{
    console.log(x);
    return x.toString(2)
})
console.log(output2);

// filter() this method is used to filter the value in an array
//example 
let arr2 = [1,4,8,6,3]
arr2.sort()
console.log(arr2);

function isEven(x){
    return x % 2==0
}
let output3 = arr2.filter(isEven)
console.log(output3);

let output4  = arr2.filter(function isOdd(x){
    return x % 2
})
console.log(output4);

let output5 = arr2.filter((x)=> x>3)
console.log(output5);

//reduce() this method is process the array and gives a single value 
// example if i need a sum of an array
let arr3 = [5,6,3,7,9];

function sumArray(arr3){
    let sum=0;
    for (let i = 0; i < arr3.length; i++) {
        sum = sum +arr3[i];
    }
    return sum
}
let sumOutput = sumArray(arr3)
console.log("The sum of an array is "+ sumOutput);
//from above function we use it in reduce method
//syntax it accept two arguments reduce(function(acc,curr) , any initial value passes to function)
// here acc = accumulator(accumulating the current value ) and curr = current value(iteration of each value in an array) 
let reduceOutput  = arr3.reduce(function reduceSum(acc,curr){
    console.log("This is acc value "+acc);
    console.log("This is curr value "+curr);
    acc = acc + curr
    return acc
},0)
console.log(reduceOutput);

//sum of even value in an array 
// let userInput1 = prompt('Enter the Array value ')
// let arr4 = userInput1.split('').map(Number)//it will split the user input into single char and convert into number
// console.log(typeof(arr4));
let arr4  =[1,2,4,4]
let reduceSumEven = arr4.reduce(function sumEven(acc , curr){
    if (curr % 2==0){
        console.log('The value of acc is '+ acc);
        console.log('The value of curr is '+ curr);
        acc = acc + curr
    }
    return acc
},0)
console.log("the sum of even number in an array is "+ reduceSumEven);

//same to find the max value in an array 
//using for simple way
let arr5 = [5,1,4,7,9]
function maxArray(arr5){
    let max=0;
    for (let i = 0; i < arr5.length; i++) {
        if(arr5[i] > max){
            max = arr5[i]
        }   
    }
    return max
}
let maxArrayoutput = maxArray(arr5)
console.log("The maximum value of an array is "+maxArrayoutput);

//now do it in reduce method 
// let userInput = prompt("Enter the array value ")
// console.log(typeof(userInput));//string
// let arr6 = userInput.split('').map(Number)//conver the sstring into number
// console.log(typeof(arr6));//object 
let arr6 = [1,2,3,4,5,200]
let reduceMax = arr6.reduce(function(acc,curr){
    //arr means max
    console.log(acc);
    console.log(curr); 
    if(curr > acc){
        acc = curr;
    }
    return acc
},0)//0 is the second argument of reduce()method it has initial values 

console.log("The Max number in an given array is "+ reduceMax);

//example for map() function the next step
let arrayObject = [
    {stuId:100,stuFname:"Nriesh",studLname:"Suresh",stuLoc:"Chennai",stuStd:10},
    {stuId:101,stuFname:"Nithesh",studLname:"Suresh",stuLoc:"Canada",stuStd:12},
    {stuId:102,stuFname:"Yogesh",studLname:"Asaithambi",stuLoc:"California",stuStd:8},
    {stuId:103,stuFname:"Kirthesh",studLname:"Ramesh",stuLoc:"Maldowa",stuStd:6},
    {stuId:103,stuFname:"Sneha",studLname:"Asaithambi",stuLoc:"Trorrento",stuStd:12},
    {stuId:103,stuFname:"Yamuna",studLname:"Rajangam",stuLoc:"Kasi",stuStd:8},

]

arrayObject.map((data)=>{
    console.log(data.stuFname +" "+data.studLname);
    
})
let output6 = arrayObject.map(function(data){
    // document.write(data.stuFname +" "+ data.studLname + "\n")
    console.log("\n"+data.stuFname+" "+data.studLname);
         
})


//reduce() method example o/p [8 :1,12:1,10:1]
let output7 = arrayObject.reduce(function(acc,curr){
    // console.log(acc);
    // console.log(curr);
    
    if(acc[curr.stuStd]){
        acc[curr.stuStd] = ++acc[curr.stuStd]
        acc[curr.studLname] = ++acc[curr.studLname]
    }
    else{
        acc[curr.stuStd] = 1
    }
    return acc
},{}) //{} - means accumulator(acc) initial value where the input is arrayobject so initail is rmpty object
console.log(output7);

//This is the example code for filter method and map in same line
let output8 = arrayObject.filter((data)=> data.stuStd>10).map((data)=>data.stuFname+" From  "+data.stuLoc)
console.log(output8);
