function videoPlay (id) {
    const urlSecreta = "https://videosupersecreto.com" + id
    console.log("se esta reproduciendo desde " + urlSecreta)
}
function videoStop (id) {
    const urlSecreta = "https://videosupersecreto.com" + id
    console.log("se esta ha pausado la url " + urlSecreta)
}

class Classes {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID)
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name
        this.classes = classes
        this.isFree = isFree
        this.lang = lang
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre === "curso malo de programacion"){
            console.error("Deja de joder")
        } else {
            this._name = nuevoNombre
        }
        
    }

}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true
})

const cursoDefinitivoHtmlCss = new Course({
    name: "Curso Definitivo de HTML y CSS",
})

const cursoPracticoHtmlCss = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english"
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

class FreeStudent extends Student {
    constructor(props) {
        super(props)
    }

    approveCourses(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos " + this.name + ", solo puedes tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props)
    }

    approveCourses(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn("Lo sentimos " + this.name + ", no puedes tomar cursos en inglés")
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props)
    }

    approveCourses(newCourse) {
            this.approvedCourses.push(newCourse)
    }
}


const juan2 = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanitokun@gmail.com",
    twitter: "juan",
    learningPaths: [escuelaWeb]
});

const miguelito2 = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelitokun@gmail.com",
    instagram: "miguelito_feliz",
    learningPaths: [escuelaWeb]
});