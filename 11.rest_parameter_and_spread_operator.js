// // ...y represent rest parameter  it can accept multiple values
// function fun(x,...y){
//     console.log(x);
//     console.log(typeof(x));
//     console.log(typeof(y));
//     console.log(y);
// }
// fun(3,5,6,78,9,10)//function call

// // we can apply in array variable
// let arr1=[100,300,200,600,500,700]
// arr1.sort()
// console.log(arr1);
// let [x,y,z,...xy] = arr1
// console.log(`The value of x is ${x}`);//100
// console.log(`The value of x is ${y}`);//200
// console.log(`The value of x is ${z}`);//300
// console.log(`The value of xy is ${xy}`);//[500,600,700]


// //we can apply in object
const stuDetails={
    sName:"Apple",
    sId:1000,
    sAge:20,
    sPlace:"Chennai"
}
// const {sName,sId,...sDetail}=stuDetails;
// console.log(sName);
// console.log(typeof(sName));
// console.log(sId);
// console.log(typeof(sId));
// console.log(sDetail);
// console.log(typeof(sDetail));

//we can aplly array
//copying 
let arr1=[100,200,300,400,500]
let arrCopy=arr1;
console.log(arr1)
console.log(arr1===arrCopy);

//cloning
let[...arrclone]=arr1;
console.log(arrclone);
console.log(arr1===arrclone);

// // we can apply in object
// //copying
// console.log(stuDetails);
// const stud_copy=stuDetails;
// console.log(stud_copy);
// console.log(stud_copy===stuDetails);//true

// //cloning
// const{...stud_clone}=stuDetails;
// console.log(stuDetails);
// console.log(stud_clone);
// console.log(stud_clone===stuDetails);//false


//exercise
//rest_parameter
// function fun(x,...y)
// {
//     console.log(x);
//     console.log(y);
// }
// fun(10,20,30,40,50)
// let arr=[10,20,30,50]
// console.log(arr);
// let[x,y,...z]=arr;
// console.log(arr);