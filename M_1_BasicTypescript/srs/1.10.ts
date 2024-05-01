{

// lets learn Union types and intersection type 

type FrontendDeveloper = 'fakibazDeveloper' | 'joniorDeveloper'  //string litaral type
type FullStackDeveloper = 'frontendDeveloper' | 'expartDeveloper' 

type Developer = FrontendDeveloper | FullStackDeveloper  // union type

const newDeveloper : FrontendDeveloper = "joniorDeveloper"


type User = {
    name: string;
    email : string;
    gender: "male" | "female";
    bloodGrup: "O+"|"A+"|"AB+";
}

const user1 : User ={
    name: "samin",
    email: 'khandakersaminyeasar@gmail.com',
    gender: "male",
    bloodGrup: "O+"
}


type FrontendDeveloper2 = {
    skills: string[];
    designation1: 'Frontend Developer';
}
type BackendDeveloper2 = {
    skills: string[];
    designation2: 'Backend Developer';
}


type FullStackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2;  // intersection type 

const fullStackDeveloper : FullStackDeveloper2 = {
    skills: ['HTML', 'CSS', 'Express'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}





    
    
    
    
    
    
    //
}