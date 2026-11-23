console.log("app.js cargado");

class RegistroNota {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
 
    registro() {
        return this.nombre + " - " + this.nota;
    }
}

const estudiante = new RegistroNota("Luis Meza", 18);
const estudiante2 = new RegistroNota("Ruben Sara", 16);
const estudiante3 = new RegistroNota("Nicol Camarena", 19);
const estudiante4 = new RegistroNota("Edith Haanco", 15);
const estudiante5 = new RegistroNota("Diego Torres", 13)

const registroNotas = [estudiante, estudiante2, estudiante3, estudiante4, estudiante5];
const listaRegistroNotas = document.querySelector("#registroNotas");
 
registroNotas.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r.registro();
    listaRegistroNotas.appendChild(li)
});