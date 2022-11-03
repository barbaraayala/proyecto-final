
class contactos {
    constructor(nombre, email, radio1, radio2) {
        this.nombre = nombre;
        this.email = email;
        this.radio1 = radio1;
        this.radio2 = radio2;
    }
}

let arrayContactos = [];

localStorage.setItem("arrayContactos", JSON.stringify(arrayContactos));

arrayContactos = localStorage.getItem("arrayContactos") ? JSON.parse(localStorage.getItem("arrayContactos")) : [];

let fomulario = document.getElementById("formulario");

fomulario.addEventListener("submit", (e) => {
    e.preventDefault();
    debugger

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let radio1 = document.getElementById("radio1").value;
    let radio2 = document.getElementById("radio2").value;

    const newContacto= new contactos (nombre,email,radio1,radio2);
    arrayContactos.push(newContacto);
    localStorage.setItem("arrayContactos", JSON.stringify(arrayContactos));

    console.log(arrayContactos);
    fomulario.reset();

})


let btn = document.getElementById("btn");


