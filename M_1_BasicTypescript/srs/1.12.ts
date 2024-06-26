{
    // nullable types  / unknown type 

    const searchName = (value:string | null) => {
        if(value){
            console.log("Searching");
        }else{
            console.log("There is nothing to search");
        }
    }

    searchName(null);

    // unknown --> typeOf

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value === 'number') {
            const convertedSpeed = (value*1000)/3600;
            console.log(`The speed is ${convertedSpeed} ms/s`)
        }
        else if(typeof value === 'string'){
            const [result, unit] = value.split(' ');
            console.log(result);
            const convertedSpeed = (parseFloat(result)*1000)/3600;
            console.log(`The speed is ${convertedSpeed} ms/s`)
        }

        else {
            console.log("Wrong Input");
        }
    }


    getSpeedInMeterPerSecond(`1000 km/h`)



    // never type 


    const thorowError =(msg: string) : never => {
        throw new Error(msg);
    }

    thorowError("Mushkil se error ho geya");





    //
}