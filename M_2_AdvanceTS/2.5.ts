{
    //
    //! Topic : Functions with Generic 
    
    const createArray = (param : string ) : string[] => {
        return [param]
    }
    const res1 = createArray("Bangladesh")
    console.log(res1)



    //? with generic : 
    const createArrayWithGeneric = <T> (param : T ) : T[] => {
        return [param]
    }

    const resWithGeneric = createArrayWithGeneric<number>(400)
    console.log(resWithGeneric)  

    // const resGenericObj = createArrayWithGeneric<{id:number;name:string}>({id: 222, name:'Mr Pasha'})
    // console.log(resGenericObj)
    type User = {id: number, name:string};
    const resGenericObj = createArrayWithGeneric<User>({id: 222, name:'Mr Pasha'})
    console.log(resGenericObj)



    //? with tuple : 
    const createArrayWithTuple = <T, Q> (param1 : T, param2:Q ) : [T,Q] => {
        return [param1,param2] ;
    }

    const res2 = createArrayWithTuple<string,number>("samin",400);
    console.log(res2)  

   const res3 = createArrayWithTuple<string,{name:string;}>("bangladesh",{name:"asia"});

   const addCourseToStudent =<T> (student: T) => {
    const course = "Next level Web Development" ;
    return {
        ...student,
        course
    }
   }

   const student1 = addCourseToStudent({name:'Samin', email:'samin@gmail.com', devType: 'Full-stack'
   })

   const student2 = addCourseToStudent({name:'Anik',
    email: "anik@gmail.com", hadWatch:true 
   })

    

    










    //
}