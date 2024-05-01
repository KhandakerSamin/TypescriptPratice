{
    // ternary operator || optional chaining || nullish coalescing 


    const age: number = 15;

    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('not adult');
    }


    const isAdult = age >= 18? 'adult' : 'not adult'
    console.log({isAdult})


    // nullish coalescing operator
    // null / undefined ---> decision making
    

    const isAuthenticated = null;
    // const isAuthenticated = "" ;  --> here ternary will not work 

    const result1 = isAuthenticated ?? 'Guest' 
    const result2 = isAuthenticated ? isAuthenticated: 'Guest';
    console.log({result1});
    console.log({result2});



    type User = {
        name: string;
        adress:{
            city: string;
            road: string;
            presentAdress: string;
            permanentAdress?: string;
        }
    }


    const user: User = {
        name: "samin",
        adress:{
            city:'dhaka',
            road:'mashjid para',
            presentAdress: 'Ashulia'
        }
    }

    const permanentAdress = user?.adress?.permanentAdress?? "No permanent Adress" ;
    console.log(permanentAdress);
    






    //
}