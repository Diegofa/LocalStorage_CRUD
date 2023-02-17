var tablaEst = localStorage.getItem("tablaEstStorage");
tablaEst = JSON.parse(tablaEst);

if (tablaEst == null) {
  var tablaEst = [];
}

var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm);

if (idForm == null) {
  var idForm = 0;
}

cargarPagina();

//Consultadatos de la tabla y los muestra en el formulario
function cargarPagina() {
  if (idForm > 0) {
    for ( const i in tablaEst ){
        var varEstudiante = JSON.parse(tablaEst[i]);
        if (varEstudiante.idForm= idForm)
        {
            document.getElementById("txtIdEstudiante").value = varEstudiante.idForm;
            document.getElementById("txtNombres").value = varEstudiante.nombres;
            document.getElementById("txtTel").value = varEstudiante.tel;
            document.getElementById("txtgrado").value = varEstudiante.grado;
            document.getElementById("est_Estado").value = varEstudiante.estado;
            break;
        }
    }
  }
}
function guardarDatos() {
  console.log("Presiono Guardar");
  var objEstudiante = JSON.stringify({
    idForm: (idForm>0) ? idForm : (tablaEst.length + 1), // valida que el Id del formulario que se está enviando sea mayor a 0 y si no es así asígna 1
    nombres: document.getElementById("txtNombres").value,
    tel: document.getElementById("txtTel").value,
    grado: document.getElementById("txtgrado").value,
    estado: document.getElementById("est_Estado").value,
  });

  console.log(objEstudiante);
  //Opción de editar obteniendo el ID del estudiante
  if (idForm > 0) {
    for(const i in tablaEst){
        var varEstudiante=JSON.parse(tablaEst[i]);
        if(varEstudiante.idForm == idForm){
            tablaEst[i]= objEstudiante;
            break;
        }

    }
  }else{
      //Insertar nuevos estudiantes
  tablaEst.push(objEstudiante);

  }


  localStorage.setItem("tablaEstStorage", JSON.stringify(tablaEst));
  window.location.replace("index.html");
}

function eliminaRegistro(idForm){
    console.log("Presiona Eliminar");

}
