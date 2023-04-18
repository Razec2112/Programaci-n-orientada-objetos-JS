class Classes {
    constructor({
        name,
        teacher,
    }) {
        this.name = name;
        this.teacher = teacher;
    }
}

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name
        this.classes = classes
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
})

const cursoDefinitivoHtmlCss = new Course({
    name: "Curso Definitivo de HTML y CSS",
})

const cursoPracticoHtmlCss = new Course({
    name: "Curso Práctico de HTML y CSS",
})


class learningPaths {
    constructor ({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses =courses;
    }
}

const escuelaWeb = new learningPaths ({

    name: "Escuela Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHtmlCss,
        cursoPracticoHtmlCss,
    ]
})

const escuelaData = new learningPaths ({

    name: "Escuela de Data Sciense",
    courses: [
        cursoProgBasica,
        "curso DataBusiness",
        "curso DataViz"
    ]
})

const escuelaVideojuagos = new learningPaths ({

    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "curso Unreal",
        "curso Unity"
    ]
})


class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name= name;
        this.email= email;
        this.username= username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanitokun@gmail.com",
    twitter: "juan",
    learningPaths: [escuelaWeb]
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelitokun@gmail.com",
    instagram: "miguelito_feliz",
    learningPaths: [escuelaWeb]
});