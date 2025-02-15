let requestUrl = "https://dragonball-api.com/api/characters?limit=58"

async function getCharacters(){
   let response = await fetch(requestUrl)
   let data = await response.json()
   let characters = data.items
   return characters
} 

let container = document.getElementById("container")
getCharacters().then(characters =>{
    characters.forEach(element => {
        container.innerHTML+=`

        <div class="name" style="width: 18rem;">
             <img src="${element.image}" class="image" alt="image characters">
        <div class="name">
            <h5 class="card-name">${element.name}</h5>
            <h7 class="card-name">${element.race}</h7>
        </div>

      <ul class="list-group list-group-flush">
         <li class="list-group-ki">Base Ki ${element.ki}</li>
         <li class="list-group-maxKi">Total Ki ${element.maxKi}</li>
         <li class="list-group-Afilliation">Afilliation ${element.affiliation}</li>
    </ul>
        </div>
        
        `
        
    });

})
