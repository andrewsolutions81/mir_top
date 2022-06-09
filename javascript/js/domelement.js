/* seleccion elementos */
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const parrafo = document.querySelector("p");

/* crear elementos div */
var items = document.createElement("div");

/* insertar texto en circulo */
circle.textContent = 2;

/* anexar elementos nuevos a container */
for(let i = 3; i <= 6;i++)
{
    let items = document.createElement("div");
    container.appendChild(items);
    items.classList.add("item");
    items.textContent = i;
}

/* asignar clase error items */
var containerChilds = container.querySelectorAll("div");
for(let j of containerChilds)
{
    j.classList.add("error");
}

/* eliminar parrafo */
parrafo.parentNode.removeChild(parrafo);

/* respuesta makeitreal 
// 1. Inserta 4 cuadrados más con el texto 3, 4, 5 y 6 respectivamente dentro del contenedor (el div con clase container).
for (let i=3; i < 7; i++) {
    const container = document.querySelector(".container")
    
    const div = document.createElement("div")
    div.classList.add("item")
    div.appendChild(document.createTextNode(i))
    
    container.appendChild(div)
  }
  
  // 2. Agrégales a todos los items la clase error
  const items = document.querySelectorAll(".item")
  items.forEach(e => e.classList.add("error"))
  
  // 3. Agrégale el texto "2" al círculo
  document.querySelector(".circle").appendChild(document.createTextNode("2"))
  
  // 4. Elimina el párrafo
  const p = document.querySelector("p")
  p.parentNode.removeChild(p)

*/