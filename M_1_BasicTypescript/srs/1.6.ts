{
// Learning Function 
// Normal Function 
// Arrow Fucntion 

function add(num1 : number, num2 : number =10) : number{
    return num1+num2 ;
}

// add(2,"5") ; will give error

const addArrow = (num1: number , num2: number): number => num1+num2 




// Object --> function --> method 

const poorUser = {
    name : "Mezba", 
    balence : 0,
    addBalance(balence:number) : string{
        return `My new balance is : ${this.balence + balence}` 
    }
}


const arr : number[] = [ 1,5,5,66];
const newArry: number[] = arr.map((elem: number): number => elem*elem);


}