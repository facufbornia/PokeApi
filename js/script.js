const URLPoke = "https://pokeapi.co/api/v2/pokemon/";
const showPkmn = document.getElementById("showPokemon");
const btnPkmn = document.getElementById("btnPoke");

function showPokemon(){
    btnPkmn.addEventListener("click", () => {
        const pokemon = document.getElementById("searchPoke").value.toLowerCase();
        fetch(URLPoke + pokemon)
        .then(resp => resp.json())
        .then(pkmn =>{
            const name = pkmn.name;
            const img = pkmn.sprites.front_default;
            const type = pkmn.types
            let showTypes = [];    
            for (let i = 0; i < type.length; i++) {
                showTypes += `${type[i].type.name} <br>`
                
            }

            showPkmn.innerHTML= ""
            showPkmn.innerHTML += 
            `<div>
                ${name.toUpperCase()} 
                <img src="${img}"> <br>
                Tipo: <br> ${showTypes.toUpperCase()}
            </div>`
        })
    })
};

showPokemon();