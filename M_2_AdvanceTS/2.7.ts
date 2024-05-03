{
    //! Topic : Generic constraint with keyof operator 

    type Vehicle ={
        bike: string;
        car: string;
        ship: string;
    }

    type Owner1 = "bike" | "car" | "ship"; //menually

    type Owner2 = keyof Vehicle 

    // const parson1 : Owner2 = //? then ctrl + space


    const user = {
        name: "Mr. Samin",
        age: 21,
        addrss: 'Dhaka'
    }

    const car = {
        model: 'supra',
        year: 2022
    }

    // console.log(user.);

    const  getPropertyValue = <X,Y extends keyof X>(obj:X , key: Y) =>{
        return obj[key];
    } 

    const result1 = getPropertyValue(car,'model')



    
    // user.name


    //! not clar properly 
    








    //
}