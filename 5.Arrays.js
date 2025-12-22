const arr=[10,20,30,40,[50,"Niresh"]];
console.log(arr);
console.log(arr[4]);
//Array methods

//to add new element at last in an existing array 
const arr1=[10,20,30,40,50]
console.log(arr1.push(60));//it show the length of added array
console.log(arr1);

//to delete a element at last in a existing array
const arr2=arr1.pop();
console.log(arr2);//it will show the deleted element 
console.log(arr1);//[10,20,30,40,50]

//to add a new element at first in an existing array
console.log(arr1.unshift(5));//it show the length of added array
console.log(arr1);//[5,10,20,30,40,50]

//to delete a element at first in an existing array
const arr3=arr1.shift();
console.log(arr3);//it will show the deleted element
console.log(arr1);//[10,20,30,40,50]

//to view particular element in a array
console.log(arr1.slice(2,7));

//to slice a particular element and delete parmanently and replace another element in an array
//Syntax: Variable_name.splice(Start_index,no.of position,replace_value )
let arr4=arr1.splice(2,2,"Niresh","suresh","Adhithya");
console.log(arr4);
console.log(arr1);

// split is used to divid the String into Array 
let str="JavaScript"
console.log(str);
let str1=str.split("");
console.log(str1);

//To sort an array using sort() method
var array1= [2,4,3,5,1]
array1.sort();
console.log(array1);

//join is used to join the array into string
let arrval = [1,2,3,4]
console.log(arrval.join());
console.log(typeof(arrval));


// To reverse an array
console.log(array1.reverse());

//to reverse a String - first we have to convert string to array by using split(' ') method
const str2 ="Niresh";
const str3 = str2.split('').reverse('').join()//output will be array reverse [ 'h', 's', 'e', 'r', 'i', 'N' ]
console.log(str3);







