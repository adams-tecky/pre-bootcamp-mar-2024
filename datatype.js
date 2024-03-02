let preBootcamp;

// object 
// {key:value}
preBootcamp = {
    teacher: {name:"james",age:null,gender:undefined},
    studentCount: 12,
    students:['amy','ada','ben','charles'],

}

console.log(preBootcamp)
console.log(preBootcamp.students)
console.log(preBootcamp.teacher.name)

console.log(typeof preBootcamp.teacher.gender)

let replaceTeacher;

replaceTeacher = "Adam"
replaceTeacher = replaceTeacher + "s"

console.log(replaceTeacher)


preBootcamp.teacher.name = preBootcamp.teacher.name.replace("james","adams")

console.log(preBootcamp)