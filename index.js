document.addEventListener("DOMContentLoaded", () => {
});

var tablaEst = localStorage.getItem("tablaEstStorage");
tablaEst=JSON.parse(tablaEst);

if(tablaEst==null){
    var tablaEst=[];

}
  function listar() {
    var dataFila ='';

    if(tablaEst.length >0)
    {
        for(const i in tablaEst){
            var varEstudiante = JSON.parse(tablaEst[i]);
            dataFila += "<tr>";
            dataFila+= "<td>" + varEstudiante.idForm+"</td>";
            dataFila+= "<td>" + varEstudiante.nombres+"</td>";
            dataFila+= "<td>" + varEstudiante.tel+"</td>";
            dataFila+= "<td>" + varEstudiante.grado+"</td>";
            dataFila+= "<td>" + varEstudiante.estado+"</td>";     
            dataFila+= "<td>" +
                    "<button type='button' class='btn btn-warning' onclick ='abrirForm ("+varEstudiante.idForm+")'>Editar</button>"
                    +"</td>";
                    dataFila+= "<td>" +
                    "<button type='button' class='btn btn-danger' onclick='eliminarRegistro(registros)'>Eliminar</button>"
                    +"</td>";
            dataFila+="<tr>";
        }
        document.getElementById("data-estudiantes").innerHTML=dataFila;
    }
    console.log("Ingresando a listar");
  }

  function abrirForm(idForm) {
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("estudiantes.html");
  }




