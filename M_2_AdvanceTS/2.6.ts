{
    //
    //! Topic : Constraints

    const addCourseToStudent = <T extends {id:number;name:string;email:string}>(student: T) => {
        const course = "Next level Web Development";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        id:1,
        name: 'Samin', 
        email: 'samin@gmail.com', 
        devType: 'Full-stack'
    })

    const student2 = addCourseToStudent({
        id:2,
        name: 'Anik',
        email: "anik@gmail.com",
        hadWatch: true
    })

    // const student3 = addCourseToStudent({
    //     emni: 'emni'
    // })  //? will give error

    const student3 = addCourseToStudent({
        id:3,
        email:'sho@gmail.com',
        name:'sho',
        emni: 'emni'
    })









    //
}