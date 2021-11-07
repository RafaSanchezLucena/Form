const inputDni = document.querySelector(".campo-dni");
const inputNombre = document.querySelector(".campo-nombre");
const inputApellido1 = document.querySelector(".campo-apellido1");
const inputApellido2 = document.querySelector(".campo-apellido2");
const botonEnviar = document.querySelector("button");


// Clase principal para crear los objetos.
class Persona {
    constructor(dni, nombre, apellido1, apellido2) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;    
    };

    descripcion() {
        alert(`El DNI de ${this.nombre} ${this.apellido1} ${this.apellido2} es ${this.dni}.`);
    };

};


// Función para asignar los valores del formulario a las variables correspondientes
// y a continuación instanciar el objeto.
function crearObjeto() {
    const valorDni = inputDni.value;
    const valorNombre = inputNombre.value;
    const valorApellido1 = inputApellido1.value;
    const valorApellido2 = inputApellido2.value;
    nuevoObjeto = new Persona(valorDni, valorNombre, valorApellido1, valorApellido2); 
    nuevoObjeto.descripcion();
    const objetoJason = JSON.stringify(nuevoObjeto);
    alert(objetoJason);
};


botonEnviar.onclick = function() {
    crearObjeto();
};


