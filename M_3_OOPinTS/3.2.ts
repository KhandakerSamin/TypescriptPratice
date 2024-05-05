{
    //! Topic : Inheritence in OOP of TS

    

    class Student {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {

            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }

    const student = new Student('Mr. student', 20, 'uganda');
    // student. 


    class Teacher {
        name: string;
        age: number;
        address: string;
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            this.name = name;
            this.age = age;
            this.address = address;
            this.designation = designation;
        }
        getSleep(numOfHours: number) {


        }
        takeClass(numOfClass: number) {
            console.log(`${this.name} will sleep for ${numOfClass}`)
        }
    }

    const teacher = new Teacher('Mr. Teacher', 40, 'uganda', 'seneior teacher');



    //! -------------------------------> 




    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {

            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }


    class Student2 extends Person{
        constructor(name: string, age: number, address: string) {
            super(name,age, address)
        }
    }

    const student2 = new Student2('Mr. student', 20, 'uganda');


    class Teacher2 extends Person {
        
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name,age,address)
            this.designation = designation;
        }
        
        takeClass(numOfClass: number) {
            console.log(`${this.name} will sleep for ${numOfClass}`)
        }
    }

    const teacher2 = new Teacher('Mr. Teacher', 40, 'uganda', 'seneior teacher');
    console.log(teacher2)
    // teacher2.








    //
}