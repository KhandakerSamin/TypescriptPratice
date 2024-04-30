// Basic Data Type

// String

let firistname  = 'samin';  //Implicit Data type

let lastName: string = 'yeasar';  //Explicit Data type

// Number
let  roll : number = 182;

// boolean 
let isAdmin : boolean = true;

// undefined 
let x : undefined = undefined;
// null
let y : null = null;


let d ; // anytype
d = 'samin';
d = 1223;
d = true; 


let b : number ; // anytype
// b = 'samin';
b = 1223;
// b = true; 


// Array

let friends :string[] = ["samin", "anik", "shourov"];
// only number can assign if decliered as number
let eligibleRoolList : number[] = [1,3,54];

eligibleRoolList.push(44); 
// eligibleRoolList.push('dd'); // will not work



// tuple --> arry --> order --> type of values

let coordinate : [number, number] = [1,4];

let ageName : [number, string , boolean] = [50 , 'Mr.X' , true] 

ageName[0] = 55 