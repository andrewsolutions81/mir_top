const json = `[
    { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
    { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
    { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
    { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
  ]`;

/* json a objeto */  
var paises = JSON.parse(json);

const tbody = document.querySelector("tbody");
const tabla = document.querySelector("table.hide");

/* evento boton */
const boton = document.querySelector("button");
boton.addEventListener("click",function(){
    for(i in paises)
    {
        // generacion filas
        let fila = document.createElement("tr");
        tbody.appendChild(fila);

        // creacion tag imagen y asignar atributos
        let imagen = document.createElement("img");
        let imgsrc = document.createAttribute("src");
        let alt = document.createAttribute("alt");
        imgsrc.value = paises[i]["flag_url"];
        alt.value = paises[i]["name"];
        
        // generacion celdas
        for(let j = 0; j < Object.keys(paises[i])["length"]; j++)
        {
            console.log(Object.keys(paises[i])[j]);
            let celdas = document.createElement("td");
            fila.appendChild(celdas);
        }

        // insercion tag imagen con atributos
        fila.childNodes[0].appendChild(imagen);
        fila.childNodes[0].childNodes[0].setAttributeNode(imgsrc);
        fila.childNodes[0].childNodes[0].setAttributeNode(alt);

        // asignacion de valores en tabla
        fila.childNodes[1].textContent = paises[i]["code"];
        fila.childNodes[2].textContent = paises[i]["name"];
    }

    // mostrar tabla y borrar boton
    tabla.classList.remove("hide");
    boton.parentNode.removeChild(boton);
});