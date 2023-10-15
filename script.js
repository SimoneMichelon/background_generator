var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

randomButton.addEventListener("click", function (){

    
    color1.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    color2.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    changeColor()
    
})


function changeColor(){

    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value
        + ")";

        css.textContent = body.style.background + ";" ;
}
changeColor();

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor)