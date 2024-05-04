{
    //! Topic : Utility Type and Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    //? Pick
    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">

    //? Omit 
    type ContactInfo = Omit<Person, 'name' | 'age'>

    //? Required - force all property to be required
    type ParsonRequired = Required<Person>

    //? Partial - force all property to be optional
    type ParsonPartial = Partial<Person>

    //? ReadOnly 

    type ParsonReadyOnly = Readonly<Person>


    const person1: ParsonReadyOnly = {
        name: 'samin',
        age: 21,
        contactNo: '013'
    }

    // person1.name='Mr. Samin'  ---> will give error


    //? Record 
    type MyObj = {
        a: string;
        b: string
    }

    type MyObjRecord = Record<string, string>

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',

    }
    const obj2: MyObjRecord = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd'
    }


    // const emptyObject : {} = {}    

    const EmptyObject: Record<string, unknown> = {}






    //
}