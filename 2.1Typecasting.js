//typecasting means converting one datatype into another data type
var a=10+10
console.log(`the value of ${a} is the type of ${typeof(a)}`);
let b=10+"10"; 
console.log(`the value of ${b} is the type of ${typeof(b)}`);
console.log(`the value of ${(10-"10")} is the type of ${typeof(10-"10")}`);
console.log(10+"hi");
console.log(10+true);
console.log(10+false);
console.log(10-true);
console.log(10-false);
console.log(10-"false");//NAN
console.log(10-"hi");//NAN
console.log(10+"20");
var c=30-"20";// numerical String
console.log(c);
