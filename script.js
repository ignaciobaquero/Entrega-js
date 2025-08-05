/* El programa pide un nombre de usuario y contraseña. Verifica si existe en un array de objetos con usuarios registrados
 (nombre, contraseña, rol). Si coincide, muestra un mensaje distinto según el prompt (admin, owner, mod,). 

 */ 


const usuariosAdmin = [
  { nombre: "alejandro", jerarquia: "Owner", contraseña: "123" },
  { nombre: "mateo", jerarquia: "Admin", contraseña: "1234" },
  { nombre: "benjamin", jerarquia: "Mod", contraseña: "12345" }
];

const boton = document.getElementById("loginBtn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value.toLowerCase();
  const contraseña = document.getElementById("contraseña").value;

  let encontrado = false;

  for (let i = 0; i < usuariosAdmin.length; i++) {
    const user = usuariosAdmin[i];
    if (user.nombre.toLowerCase() === usuario && user.contraseña === contraseña) {
      encontrado = true;
      localStorage.setItem("usuarioLogueado", JSON.stringify(user));

     
      let recibimiento = "";

      switch (user.jerarquia) {
        case "Owner":
          recibimiento = `Bienvenido ${user.nombre}, tenés control total del sistema.`;
          break;
        case "Admin":
          recibimiento = `Hola Admin ${user.nombre}, acceso concedido.`;
          break;
        case "Mod":
          recibimiento = `Hola Moderador ${user.nombre}.`;
          break;
        default:
          recibimiento = `Hola ${user.nombre}, tu rol es: ${user.jerarquia}`;
      }

      mensaje.textContent = recibimiento;
      break;
    }
  }

  if (!encontrado) {
    mensaje.textContent = "Usuario o contraseña incorrectos.";
  }
});