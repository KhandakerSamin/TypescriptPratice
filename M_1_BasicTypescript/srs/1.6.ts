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
    addBalance(balence:number) : number{
        return `My new balance is : ${this.balence + balence}` 
    }
}
