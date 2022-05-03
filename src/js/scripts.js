const paragraph = document.querySelector("#characterInfo");
const button = document.querySelector("#fetch");
const search = document.querySelector("#search");


button.addEventListener("click", e => {
    e.preventDefault;

    let pokemonSearch = search.value.toLowerCase();

    let endPoint = " https://pokeapi.co/api/v2/pokemon/" + pokemonSearch;
    fetch(endPoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if ((pokemonSearch.length) < 1) {
                paragraph.innerText = "You must enter a name!";
                paragraph.style.color = "white";
            } else if ((pokemonSearch.length) > 10) {
                paragraph.innerText = "Pokemon name is too long, choose a maxium of 11 character!";
            } else if (pokemonSearch.match("^[a-zA-Z-]*$"))
                paragraph.style.color = "white"; {
                paragraph.innerText = "Input error, make sure you spell pokemon character name properly.";
                paragraph.style.color = "white";
            }

        })

        .then(apiPokemon => {
            if (apiPokemon) {
                let myOutPut = {
                    name: apiPokemon.name,
                    typeName: apiPokemon.types[0].type.name,
                    weight: apiPokemon.weight,
                    height: apiPokemon.height,
                    base_experience: apiPokemon.base_experience
                };
                console.log(apiPokemon)
                paragraph.innerText = `Species Name: ${myOutPut.name}\n Type Name: ${myOutPut.typeName}\n Weight: ${myOutPut.weight}\n Height: ${myOutPut.height}\n Base Experience: ${myOutPut.base_experience}`
                paragraph.style.color = "white";
            }

        })
        .finally(() => {
            console.log("Finally")
        })
});