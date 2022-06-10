// data traida por http request
const paises = fetch("https://s3.amazonaws.com/makeitreal/countries.json").then(
    function(response){ return response.json() }
).then(function(data){
    //console.log(data);
    const tbody = document.querySelector("tbody");
    const tabla = document.querySelector("table.hide");

    // evento boton 
    const boton = document.querySelector("button");
    boton.addEventListener("click",function(){
        for(i in data)
        {
            // generacion filas
            let fila = document.createElement("tr");
            tbody.appendChild(fila);

            // creacion tag imagen y asignar atributos
            let imagen = document.createElement("img");
            let imgsrc = document.createAttribute("src");
            let alt = document.createAttribute("alt");
            imgsrc.value = data[i]["flag_url"];
            alt.value = data[i]["name"];
            
            // generacion celdas
            for(let j = 0; j < Object.keys(data[i])["length"]; j++)
            {
                let celdas = document.createElement("td");
                fila.appendChild(celdas);
            }

            // insercion tag imagen con atributos
            fila.childNodes[0].appendChild(imagen);
            fila.childNodes[0].childNodes[0].setAttributeNode(imgsrc);
            fila.childNodes[0].childNodes[0].setAttributeNode(alt);

            // asignacion de valores en tabla
            fila.childNodes[1].textContent = data[i]["code"];
            fila.childNodes[2].textContent = data[i]["name"];
        }

        // mostrar tabla y borrar boton
        tabla.classList.remove("hide");
        boton.parentNode.removeChild(boton);
    });
});

