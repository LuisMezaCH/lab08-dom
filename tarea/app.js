console.log("app.js cargado");

const titulo = document.querySelector("#titulo");
titulo.style.color = "red";

const subtitulo = document.querySelector("#subtitulo");
subtitulo.style.color = "blue";

class RegistroNota {
    constructor(curso, nombre, nota) {
        this.curso = curso;
        this.nombre = nombre;
        this.nota = Number(nota);
    }

    mostrarRegistro(){
        return `${this.curso} -  ${this.nombre} - ${this.nota.toFixed(2)}`;
    }

    crearElementoHTML() {
        const li = document.createElement("li");

        li.textContent = this.mostrarRegistro() + " ";

        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";

        btnBorrar.addEventListener("click", () => {
         li.remove();
        });

        li.appendChild(btnBorrar);
        return li
    }
}

const formulario = document.getElementById("formulario-notas");
const listaNotas = document.getElementById("lista-notas");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const curso = document.getElementById("curso").value;
    const nombre = document.getElementById("nombre").value;
    const nota = document.getElementById("nota").value;

    const nuevoRegistro = new RegistroNota(curso, nombre, nota);
    const elementoDOM = nuevoRegistro.crearElementoHTML();

    listaNotas.appendChild(elementoDOM);

    formulario.reset();
});