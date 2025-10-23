let empleado= {

    legajo: 123,
    nombre: "Juan",
    apellido: "Gomez",
    dni: 150,
    mensaje: "Si deseas modificar algún dato, Llena el formulario que está a la derecha."};

function infoEmpleados(empleado) {
    let divInfo = document.createElement("div");
    divInfo.className = "infoEmpleados";
    divInfo.innerHTML = `<h2> Bienvenido ${empleado.nombre + " Este es tu registro."}</h2>
                        <h3> Verifica que tus datos estén correctos:</h3>
                        <p>Legajo: ${empleado.legajo}</p>
                        <p>${"Nombre: "+empleado.nombre}</p>
                        <p>Apellido: ${empleado.apellido}</p>
                        <p>Dni: ${empleado.dni}</p>
                        <p></p>
                        <p>${empleado.mensaje+" Sus modificaciones deberán esperar ser confirmadas"}</p>
                        <p>Empleado: ${("Legajo :"+empleado.legajo)+", Nombre: "+empleado.nombre+", Apellido: "+empleado.apellido}</p>`;
    document.body.appendChild(divInfo);
}

infoEmpleados(empleado);



