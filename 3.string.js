// to declare the string using double quotes
var a="welcome"
console.log(a);
//To declare the String using single quotes 
var b='welcome'
console.log(b);

// to write a multiline string using (backstick) button
var z=`welcome
to
java script`;
console.log(z);
//to write a multiple String using escape character
var z1="Hi \n how \n are \n You"
console.log(z1);

// to concate the two string in a same line without using escape characters
// this is called as interpolation (${identifier})
var a="string";
//using normal concatination
console.log("today We will learn "+" "+a);
//using interpolation
console.log(`today We will learn ${a}`);

//get the user input using prompt method converting interpolation
//example
var user=prompt("enter your name")
console.log(user);
//we can convert the string into number in console because prompt 
var age=prompt("enter your age")
console.log(Number(age)); 
//we can convert the string into number in a variable declaration
var num=Number(prompt('enter your number'));
console.log(num);
console.log(`the user name is ${user} and his age ${age} number is ${num}`);
//to display a message in interface uding interpolation 
document.write(`the user name is ${user} and his age ${age} number is ${num}`);

