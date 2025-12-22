// to declare a object
const stuDetails={
    sName:"Apple",
    sId:1000,
    sSubject:["java","web tech"],
    //add another object inside the object
    sAddress:{
        slocaton:"Chennai",
        spin:600012,
    }
}
//to console the object
console.log(stuDetails);
//to change the value :indentifier name.key=values
stuDetails.sName="Niresh";
console.log(stuDetails);
//to add a new key and value
stuDetails.sLocation="Chennai";
console.log(stuDetails);
//to delete or remove 
delete stuDetails.sSubject[0];
console.log(stuDetails);
// to delete permanently in array
console.log(stuDetails.sSubject.shift());
console.log(stuDetails);

//to add another object inside the object
console.log(stuDetails);
//To call an object inside another object
console.log(stuDetails.sAddress);
//to call only keys in object
console.log(Object.keys(stuDetails));
//to call only values in object
console.log(Object.values(stuDetails));
// to call both keys and values 
console.log(Object.entries(stuDetails));

//to freeze the key and value
console.log(Object.freeze(stuDetails));
stuDetails.sdesignation="Developer";
console.log(stuDetails);

//to check weather the freeze method is apply or not
console.log(Object.isFrozen(stuDetails));

//to seal the key and value means we cannot add a new key and value but we can modify existing value
console.log(Object.seal(stuDetails));
stuDetails.sSubject[0]="javascript";
console.log(stuDetails);
//to check weather the given object is sealed or not
console.log(Object.isSealed(stuDetails));