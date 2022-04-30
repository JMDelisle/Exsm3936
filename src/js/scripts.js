const paragraph = document.querySelector("#characterInfo");
const button = document.querySelector("#fetch");
const search = document.querySelector("#search");



button.addEventListener("click", e => {
    e.preventDefault;
    
    let pokemonSearch = search.value.toLowerCase();

    let endPoint = " https://pokeapi.co/api/v2/pokemon/" +pokemonSearch;
    fetch(endPoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            } 
            else if  ((pokemonSearch.length) > 11) {
                paragraph.innerText = "Pokemon name is too long, choose a maxium of 11 character!";
            }
            else if ((pokemonSearch.length) < 1) {
                paragraph.innerText = "You must enter a name!";
            }
            else if (pokemonSearch.match("^[a-zA-Z-]$"))
            {
                paragraph.innerText = "Pokemon must contain only 10 characters";
            }
            else 
            {
                paragraph.innerText = "Input error, make sure you spelled pokemon character name properly.";
            }

        })

        .then(apiPokemon => {
            if (apiPokemon) 
            {
                let myOutPut = {
                    name: apiPokemon.name,
                    typeName: apiPokemon.types[0].type.name,
                    weight: apiPokemon.weight,
                    height: apiPokemon.height,
                    base_experience: apiPokemon.base_experience
                };
                console.log(apiPokemon)
                paragraph.innerText = `Chosen species is ${myOutPut.name} and it abilities is ${myOutPut.typeName}. ${myOutPut.name} weighed at ${myOutPut.weight}, height at ${myOutPut.height} and it base experince is ${myOutPut.base_experience}. `
            }
        
        }).finally(() => {
            paragraph.innterText += "Request complete."
        })
});