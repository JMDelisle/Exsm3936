const paragraph = document.querySelector("#characterInfo");
const button = document.querySelector("#fetch");
const search = document.querySelector("#search");

button.addEventListener("click", e => {
    e.preventDefault;
    let endpoint = "https://pokeapi.co/api/v2/pokemon";
    fetch(endpoint)
        .then(response => {
            if (response.ok) {
                return response.json();
            } 
            else 
            {
                paragraph.innerText = "Unidentified error, please try again later.";
            }
        })
        .then(data => {
            if (data) 
            {
                let myOutPut = {
                    speciesName: data.speciesName,
                    typeName: data.typesName,
                    weight: data.weight,
                    height: data.height,
                    baseExperience: data.baseExperience
                };

                paragraph.innerText = `Chosen species is ${myOutPut.speciesName} and it's name is ${myOutPut.typesName}. ${myOutPut.typesName} weighed at ${myOutPut.weight}, height at ${myOutPut.height} and it base experince is ${myOutPut.baseExperience}. `
            }
   
        }).finally(() => {
            paragraph.innterText += "Request complete."
        })
});