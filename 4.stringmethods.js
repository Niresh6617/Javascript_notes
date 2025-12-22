//Strings Method
// to convert a string into uppercase
var x="Welcome";
console.log(x.toUpperCase());

//to convert the string into lowercase
console.log(x.toLowerCase());

//to identify the length of the string is
console.log(x.length);

//to find the particular character by giving the index value
console.log(x.charAt(3));

//to find the particular index number by giving the charater
console.log(x.indexOf("e"));

//if you declare a charater which is not present in the string
console.log(x.indexOf("a"));//it gives -1

// if you try to check a particular character is present in a string or not 
console.log(x.includes("a"));//it gives boolean value 

//if you want  to slice a particular character in string 
console.log(x.slice(3,5+1));//or slice(3,6)(starting index,ending index+1)

let y=x.split(['']);
console.log(y);
console.log(typeof(y));

// To reverse an array
var array1= [1,2,3,4,5]
console.log(array1.reverse());
