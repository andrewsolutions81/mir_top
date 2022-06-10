/* seleccionar elementos */
const boton = document.querySelector("#append");
const squares = document.querySelector(".squares");

/* enlazar evento boton donde inserta cuadro */
boton.addEventListener("click",function(){
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    squares.appendChild(newSquare)
});

/* evento borrar cuadros insertados */
squares.addEventListener("mousemove", function(e){
    if(e.target.classList.contains("square"))
    {
        e.target.parentNode.removeChild(e.target);
    }
});