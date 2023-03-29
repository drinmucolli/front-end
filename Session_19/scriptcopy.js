const search = document.querySelector("button");
const input = document.querySelector("input");
const pokeName = document.querySelector("h1")
const pokeExp = document.querySelector("h2")

search.addEventListener("click", ()=>{
const id = input.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        pokeName.textContent = data.name;
        pokeExp.textContent = data.base_experience;
      
    })
    .catch(error => {
        console.log(error);
    })

})
fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(res => res.json())
    .then(data => {
        console.log(data)
      
    })
    .catch(error => {
        console.log(error);
    })
