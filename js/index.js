/* 
Se tiene de varios estudiantes su nombre, semestre y nota. 
También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo
y se necesita una función que retorne los estudiantes de un semestre dado.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14} 
Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado. 
*/

let estudiantes = [
    {nombre: 'Luis', semestre: 5, nota: 14},
    {nombre: 'Andres', semestre: 6, nota: 17},
    {nombre: 'Ana', semestre: 7, nota: 19},
    {nombre: 'Alejandro', semestre: 6, nota: 12},
    {nombre: 'Maria', semestre: 8, nota: 9},
];

let estudiantesSemestre = (estudiantes, semestre) => {
    let estudiantesFiltrados = [];
    estudiantes.forEach((estudiante) => {
        if (estudiante.semestre == semestre) estudiantesFiltrados.push(estudiante);
    });
    return estudiantesFiltrados;
}

let salida = document.getElementById('salida');
let estudiantesSem6 = estudiantesSemestre(estudiantes, 6);
salida.innerHTML = `Estudiantes del semestre 6: <br>`;
estudiantesSem6.forEach((estudiante) => {
    salida.innerHTML += `Nombre: ${estudiante.nombre} - Nota: ${estudiante.nota}<br>`;
});