{
    //

    //! Topic:  Generic Type 

    // type GenericArray = Array<number>
    type GenericArray <T> = Array<T>


    const rollNumbers1 : number[] = [2,3,6,7] ;
    const rollNumbers2 : Array<number> = [2,3,6,7] ;
    const rollNumbers3 : GenericArray<number> = [2,3,6,7] ;

    const mentors1 : string[] = ["samin", "anik", "sho"];
    const mentors2 : Array<string> = ["samin", "anik", "sho"];
    const mentors3 : GenericArray<string>= ["samin", "anik", "sho"];

    const boolArray1 : boolean[] = [true , false, true] ;
    const boolArray2 : Array<boolean> = [true , false, true] ;
    const boolArray3 :GenericArray<boolean> = [true , false, true] ;


    
    // write array of object using generic type
    const user1 : GenericArray<{name: string , age: number}> = [
        {
            name: 'samin',
            age: 100 
        },
        {
            name: 'anik',
            age: 200,
        },
    ]


    //? if there are a big object then we can declire the type first and then set them it into generic type

    type User = {
        name: string;
        age: number
    }

    //or using interface 

    type User1 {
        name: string;
        age: number 
    }

    const user2 : GenericArray<User1> = [
        {
            name: 'samin',
            age: 100 
        },
        {
            name: 'anik',
            age: 200,
        },
    ]
    


    // --------------------------------




    const add = (x: number , y: number) : number => x+y 
    const result = add(40,50);
    console.log(result);



    //? Generic Tuple 

    type GenericTuple <x,y> = [x,y]

    const manush : GenericTuple<string, string> = [ 'Mr.x', 'Mr.Y'] 


    const userWithId : GenericTuple<number,{name: string, email: string}> = [1234, {
        name: 'samin',
        email: 'khandakersaminyeasar@gmail.com'
    }]








    //
}