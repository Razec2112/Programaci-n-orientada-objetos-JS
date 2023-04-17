class learningPaths {
    constructor ({
        id,
        name,
        courses,
    }) {
        this.id = id;
        this.name = name;
        this.courses =courses;
    }
}

const escuelaWeb = new learningPaths ({
    id: 001,
    name: "Escuela Web",
    courses: [
        "curso basico de JS",
        "curso practico de JS"
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