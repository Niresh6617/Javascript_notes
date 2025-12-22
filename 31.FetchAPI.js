let div_container = document.createElement('div')
div_container.style.border="1px solid black"

let h1 =document.createElement('h1')
h1.style.color="red";
h1.innerText="Hello"
div_container.appendChild(h1)
document.body.appendChild(div_container)

// fetch() is a JavaScript function used to make HTTP requests to a server.
// It works asynchronously and returns a Promise.
// The response can be handled using .then() for success and .catch() for errors.
// fetch() is simpler and more modern compared to older methods like XMLHttpRequest.
//then(),catch() - is used to handle the promises
// Resourse Bros code Youtube channel fetch() Function

//step-1 fetch api and convert into json object
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// //above fetch function will return a promise we have 
//       .then(Response => Response.json())
//       .then(data => console.log(data))
//       .catch(Error => console.error(Error))

//step-2 apply custome error while it cantt able to fetch the api
//Response.ok is a object key where it show the status of the API data 
// fetch("https://pokeapi.co/api/v2/pokemon/Niresh")
//       .then(Response =>{
//             if(!Response.ok){
//                   throw new Error("Could't able to fetch");
//             }
//             return Response.json()
//       })
//       .then(data => console.log(data.id))
//       .catch(error => console.log(error))
//output: Error: Could't able to fetchat 31.FetchAPI.js:29:25

// using async and await to fetching API
// await and async used in a function we can achieve this by using try and catch 
// async function fetchData(){
//       try{          
//             const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion")
            
//             if(!response.ok){
//                   throw new Error("Could Not able to fetch");
//             }

//             const data =await response.json()
//             console.log(data);
            
//       }
//       catch(error){
//             console.error(error)
//       }
// }
// fetchData(); //function call

// fetch using asynk and await along with HTML input 
async function fetchData(){
      try{
            const pokimonName = document.getElementById("pokimonName").value.toLowerCase();
            
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonName}`)
            
            if(!response.ok){
                  throw new Error("Could Not able to fetch");
            }

            const data =await response.json()
            const pokimonSrpites = data.sprites.front_default;
            const imgElement = document.getElementById("pokimonSprite")
            
            imgElement.src = pokimonSrpites
            imgElement.style.display = "block   "
      }
      catch(error){
            console.error(error)
      }
}
fetchData(); //function call