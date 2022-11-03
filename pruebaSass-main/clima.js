
const apiClima="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

fetch(apiClima)
.then(respuesta=>respuesta.json())
.then((datos)=>{
    console.log(datos);
    verClima(datos);

})
.catch(error=> console.log(error));

let contClima= document.getElementById("contClima");

function verClima(datos){
    contClima.innerHTML=";"
    datos.forEach(clima=>{
        const div= document.createElement("div");
        div.innerHTML=`${clima.apiClima}`

    })
}