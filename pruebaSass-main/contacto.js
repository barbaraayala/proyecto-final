
class contactos {
    constructor(nombre, email, infoSi, infoNo) {
        this.nombre = nombre;
        this.email = email;
        this.radio1 = infoSi;
        this.radio2 = infoNo;
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
    let infoSi = document.getElementById("radio1").value;
    let infoNo = document.getElementById("radio2").value;

    const newContacto= new contactos (nombre,email,infoSi,infoNo);
    arrayContactos.push(newContacto);
    localStorage.setItem("arrayContactos", JSON.stringify(arrayContactos));

    console.log(arrayContactos);
    fomulario.reset();

})

let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    Toastify({
        text:"Gracias :)",
        duration: 3000,
        gravity: "boottom",
        background: "linear-gradient (to right #CC00FF, #CC00CC)",
    }).showToast();
})


