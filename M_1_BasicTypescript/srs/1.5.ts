// Reference Type --> Object 

const user : {
    readonly company: string, // type --> litaral Type   ---> if value is fixed 
    firstName: string ,
    middleName? : string, //optional type
    lastName: string,
    isMarried: boolean
} = {
    company:"Programing Hero",
    firstName : "Khandaker ",
    middleName: "Samin",
    lastName: 'Yeasar',
    isMarried: false
} ;


// user.company="PH"