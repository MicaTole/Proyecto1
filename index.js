// Base de datos de alumnos
const alumnos = [
    { nombre: "Mateo", notas: [8, 9, 7] },
    { nombre: "Juan", notas: [6, 7, 5] },
    { nombre: "María", notas: [10, 9, 10] }
  ];
  
 
  function obtenerNombreAlumno() {
    const entrada = prompt("Ingresa el nombre del alumno:");
    return entrada ? entrada.trim().toLowerCase() : "";
  }
  
  
  function buscarAlumno(nombreIngresado) {
    return alumnos.find(alumno => alumno.nombre.toLowerCase() === nombreIngresado);
  }
  
  function calcularPromedio(notas) {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return (suma / notas.length).toFixed(2);
  }
  
  function registrarAlumno() {
    let nombreNuevo = prompt("Ingresa el nombre del nuevo alumno:");
    if (!nombreNuevo) {
      alert("No ingresaste un nombre válido.");
      return;
    }
  
    let notas = [];
  
    for (let i = 1; i <= 3; i++) {
      let nota = parseFloat(prompt(`Ingresa la nota ${i} (número entre 1 y 10):`));
      
      if (isNaN(nota) || nota < 1 || nota > 10) {
        alert("Nota inválida. Se canceló el registro.");
        return;
      }
  
      notas.push(nota);
    }
  
    alumnos.push({
      nombre: nombreNuevo.trim(),
      notas: notas
    });
  
    alert(`¡Alumno ${nombreNuevo.trim()} registrado correctamente con notas: ${notas.join(", ")}`);
  }
  
  
  function mostrarResultadoAlumno(alumno) {
    const promedio = calcularPromedio(alumno.notas);
    const mensaje = `El alumno ${alumno.nombre} tiene las siguientes notas: ${alumno.notas.join(", ")}\nPromedio: ${promedio}`;
    alert(mensaje);
  }
  
  
  function menuPrincipal() {
    let opcion = prompt(
      "Elige una opción:\n1. Consultar alumno\n2. Registrar nuevo alumno\n3. Salir"
    );
  
    if (opcion === "1") {
      const nombre = obtenerNombreAlumno();
      if (!nombre) {
        alert("No ingresaste ningún nombre.");
        return;
      }
  
      const alumno = buscarAlumno(nombre);
      if (alumno) {
        mostrarResultadoAlumno(alumno);
      } else {
        alert("Alumno no encontrado.");
      }
  
    } else if (opcion === "2") {
      registrarAlumno();
  
    } else if (opcion === "3") {
      return false; 
    } else {
      alert("Opción inválida.");
    }
  
    return true;
  }
  
 
  function iniciarSistemaNotas() {
    let seguir = true;
  
    while (seguir) {
      seguir = menuPrincipal();
    }
  
    alert("Gracias por usar el sistema de notas de alumnos.");
  }
  
  iniciarSistemaNotas();
  console.log();
 