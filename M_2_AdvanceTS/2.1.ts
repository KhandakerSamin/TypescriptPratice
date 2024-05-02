{
    // we will learn Type assertion 

    let anyThing : any ;

    anyThing = "Next Level Web Development";

    anyThing = 2222 ;

    // (anyThing as string)
    // (anyThing as number)

    const kgToGM = (value : string | number) : string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)*1000;
            return `The converted value is : ${convertedValue}` ;
        }
        if(typeof value === 'number') {
            return value*1000 ;
        }
    }


    const result1 = kgToGM(1000) as number;
    console.log(result1);
    const result2 = kgToGM("1000") as string;
    console.log(result2);




    type CustomError = {
        message : string;
    }

    try{

    }catch(error){
        console.log(error as CustomError).message
    }




     
    
    
    //
}