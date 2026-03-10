// map - it is used to transform the values in an array 
// to coonvert a array value to binary 
var arr1 = [3,5,8]
let value_x  = arr1.map((x)=>{
    console.log(x);
    return x.toString(2)
})
console.log(value_x);

// sorting an array using sort method 
var arr2 = [31,20,28,47]
console.log(arr2);
arr2.sort()
console.log(arr2);

function isEven(x){
    return x % 2 ==0
}
var arr3 = arr2.map(isEven)
console.log(arr3);

var arr4 = arr2.filter(isEven)
console.log(arr4);
