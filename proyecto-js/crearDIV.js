let empresa= {
    nombre: "Tech Solutions",
    ubicacion: "Madrid",
    empleados: 150};

function mostrarInfoEmpresa(empresa) {
    let divInfo = document.createElement("div");
    divInfo.className = "info-empresa";
    divInfo.innerHTML = `<h2>${empresa.nombre}</h2>
                         <h3>${"Datos de la empresa: "+ empresa.nombre}</h3>
                         <p>Ubicación: ${empresa.ubicacion}</p>
                         <p>Empleados: ${empresa.empleados}</p>`;
    document.body.appendChild(divInfo);
}
mostrarInfoEmpresa(empresa);