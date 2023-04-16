const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}

Student.prototype.aprobarCurso = this.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes",
    ]
)

// Prototipos con la sintaxis de clases

class Student2 {
    constructor({
        name, 
        age, 
        email,
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = [];
        this.email = email
    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

const miguelito = new Student2({
    email: "miguelito@gmail.com",
    name:"Miguel",
    age: 28,
})