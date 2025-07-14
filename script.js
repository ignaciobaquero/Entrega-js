/* El programa pide un nombre de usuario y contraseña. Verifica si existe en un array de objetos con usuarios registrados
 (nombre, contraseña, rol). Si coincide, muestra un mensaje distinto según el prompt (admin, owner, mod,). 

 */ 


let usuario = prompt("Ingrese su nombre");
let contraseña = prompt("Ingrese su contraseña");

const usuariosAdmin = [
  { nombre: "alejandro", jerarquia: "Owner", contraseña: "123" },
  { nombre: "mateo", jerarquia: "Admin", contraseña: "1234" },
  { nombre: "benjamin", jerarquia: "Mod", contraseña: "12345" }
];

let encontrado = false;

for (let i = 0; i < usuariosAdmin.length; i++) {
  if (
    usuariosAdmin[i].nombre.toLowerCase() === usuario.toLowerCase() &&
    usuariosAdmin[i].contraseña === contraseña
  ) {
    encontrado = true;

    let rol = usuariosAdmin[i].jerarquia;
    
    if (rol === "Owner") {
      alert("Bienvenido " + usuario + ", tenés control total del sistema.");
    } else if (rol === "Admin") {
      alert("Hola Admin " + usuario + ", acceso concedido.");
    } else if (rol === "Mod") {
      alert("Hola Moderador " + usuario);
    } else {
      alert("Hola " + usuario + ", tu rol es: " + rol);
    }
    
    break;
  }
}

if (!encontrado) {
  alert("Usuario o contraseña incorrectos. Reintentá.");
}



