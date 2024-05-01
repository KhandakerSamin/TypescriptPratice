{
    //


// Type alias

const student1 : {
    name:string,
    age:number,
    conactNo: string,
    address: string,
    gender: string
} = {
    name:'samin',
    age:35,
    conactNo: "01700000000",
    address:'Dhaka',
    gender: 'male'
}

const student2 : {
    name: string,
    age: number,
    adress: string,
    gender: string
}={
    name: 'anik',
    age:23,
    adress:"sylet",
    gender:'male'
}


// lets declire type alias

type Student = {
    name: string,
    age: number,
    gender: string,
    contactNo?: string,
    address: string,
}



const studentA1:Student ={
    name: 'samin',
    age: 23,
    gender: 'male',
    contactNo:'01300000000',
    address:'dhaka'
}
const studentA2:Student ={
    name: 'samin',
    age: 23,
    gender: 'male',
    address:'dhaka'
}
const studentA3:Student ={
    name: 'samin',
    age: 23,
    gender: 'male',
    address:'dhaka'
}






type UserName = string;

type IsAdmin = boolean

const userName: UserName = "Samin";
const isAdmin: IsAdmin = true;





const add = (num1:number , num2: number): number => num1+num2;


type Add = (num1: number , num2 : number) => number ;

const add2 : Add = (numx, numy) => numx+numy




















    //
}