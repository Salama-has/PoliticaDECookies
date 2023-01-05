/*let mensajeCookies =
  "Utilizamos cookies analíticas para darte la mejor experiencia" +
  "en nuestra web.Puedes informarte más sobre qué cookies estamos utilizando en" +
  "nuestra página de Políticas de cookies o desactivarlas en los AJUSTES." +
  "Haz click en Cancel si no quieres que almacenemos coolies en tu equipo";

Swal.fire({
  title: "Este sitio utiliza cookies",
  showDenyButton: true,
  showCancelButton: true,
  text: mensajeCookies,
  imageUrl: "Logo.png",
  imageWidth: 200,
  imageHeight: 200,
  imageAlt: "Cookies",
}).then(function (result) {
  if (result.isConfirmed) {
    Swal.fire("Cookies Aceptadas", "", "success");
  } else {
    Swal.fire(
      "Cookies rechazadas, no las usaremos",
      '<a href="https://blog.ensalza.com/politica-de-cookies/">Politica de cookies</a>',
      "info"
    );
    //what they mean?
    grabar.removeEventListener("click", grabaCookie, false);
    leercok.removeEventListener("click", imprimirentabla, false);
  }
});
*/
let itarea = document.getElementById("tarea");
let itiempoProgramado = document.getElementById("tiempoProgramado");
let itiempoEmpleado = document.getElementById("tiempoEmpleado");
let idescripcion = document.getElementById("descripcion");
let idatatable = document.getElementById("datatable");
let borrarCookie = document.getElementById("borrarCookie");

let index=0;
let inputArray = new Array();
let iGrabar = document.getElementById("grabarCookie");
let imostrar = document.getElementById("leerCookie");

iGrabar.addEventListener("click", grabaCookie, false);
imostrar.addEventListener("click", mostrarCookie, false);

function grabaCookie() {
  inputArray.push(
    itarea.value,
    itiempoProgramado.value,
    itiempoEmpleado.value,
    idescripcion.value
  );
  console.log(inputArray);
  let value = inputArray.join("*/*");
  setCookie(index, value, 30);
  inputArray.splice(0, 4);
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = Number(cname) + "=" + cvalue + ";" + expires + ";path=/";
  itarea.value="";
    itiempoProgramado.value="";
    itiempoEmpleado.value="";
    idescripcion.value="";
}

function mostrarCookie() {
  idatatable.innerHTML = "";
  let arr = document.cookie.split(";");
  for (index = 0; index < arr.length; index++) {
    let trozo = arr[index].split("*/*");
    let trozo2 = trozo[0].split("=");
    idatatable.innerHTML += `
  <tr>
   <td>${index+1}</td>
   <td>${trozo2[1]}</td>
   <td>${trozo[1]}</td>
   <td>${trozo[2]}</td>
   <td>${trozo[3]}</td>
  </tr>
  `;
  }
}

function deleteCookie(name) {
  let date = new Date();
  date.setTime(date.getTime() - 1);
  name=name+1;
  document.cookie = name + "=; expires=" + date.toUTCString();
  idatatable.deleteRow(name);
}


