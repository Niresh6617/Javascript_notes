// JSON (Java Script object Notation) it is a data interchange Format 
// It is used to transfer the data into servers and web application(browser)

let jsonArray = ['Niresh','Nithesh','Suresh']
let jsonObject = {
    name:'Niresh',
    age:23,
    loc:"Chennai",
    isEmployed: false
}
let jsonArrayofObject =[
    {
        name:'Nithesh',
        age:24,
        loc:"Chennai",
        isEmployed: true
    },
    {
        name:'Suresh',
        age:53,
        loc:"ESI",
        isEmployed: true
    },
    {
        name:'Rajangam',
        age:78,
        loc:"Thanjavur",
        isEmployed: false
    }
]
console.log(jsonArray);
console.log(typeof(jsonArray));
// convert the jsonArray into JsonString using Stringify
let jsonArrayStringify = JSON.stringify(jsonArray)
console.log("This is Json Stringfy " + jsonArrayStringify);

console.log(jsonObject);
// Convert the jsonobject into jsonstring using Stringify
let jsonObjectStringify = JSON.stringify(jsonObject)
console.log(jsonObjectStringify);

console.log(jsonArrayofObject);
// convert the jsonArrayObject into jsonString using Stringify
let jsonArrayObjectStringify = JSON.stringify(jsonArrayofObject)
console.log(jsonArrayObjectStringify);

// convert the JSON Array String into JSON Object
console.log(jsonArrayStringify);
let jsonArray_jsonObject = JSON.parse(jsonArrayStringify)
console.log(jsonArray_jsonObject);

// convert JSON Object String into JSON parse
console.log(jsonObjectStringify);
let jsonObjectString_To_jsonObject = JSON.parse(jsonObjectStringify)
console.log(jsonObjectString_To_jsonObject);

//convert JSON Array of Object into JSON Object
console.log(jsonArrayObjectStringify);
let jsonArrayObjectStringify_To_jsonObject = JSON.parse(jsonArrayObjectStringify)
console.log(jsonArrayObjectStringify_To_jsonObject);

