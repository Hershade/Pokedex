var number = Math.floor(Math.random() * 248);
var result = ""
var pokemones = []

for (var i = 1; i < 7; i++) {
    
    var number = Math.floor(Math.random() * 248);
    console.log(" soy el numero", number);
    makeGetRequest("https://pokeapi.co/api/v2/pokemon/"+number);



}
console.log("VARIABLE RESULT", result)
function makeGetRequest(path) {
    axios.get(path).then(
        (response) => {
        result = response.data;
        var div = document.createElement("div");
        div.style.textAlign = "center";
        div.style.margin = "50px"
        div.style.boxShadow = "0 0 5px #999999"
        div.style.border = '0.5em solid yellow';
        div.style.background = "black";
        div.style.padding = "20px";
        div.style.fontSize = "35px";
        div.style.color = "#fcf005";
        div.innerHTML = result.forms[0].name;
        div.classList.add(".grid-item");
        div.classList.add(".carta");
        var img = document.createElement("img");
        img.style.display = "block"
        img.style.margin = "0 auto"
        img.src = result.sprites.front_default;
        div.appendChild(img)
        document.getElementById("grid-container").appendChild(div);
    },
        (error) => {
            console.log(error);
        }
    );
}
console.log("POKEMONES", pokemones)
