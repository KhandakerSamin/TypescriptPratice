{
    //! Mapped Types

    const arrOfNumbers : number[] = [1,4,5];
    
    const arrOfString : string[] = ['1','4','5']; // via manual 

    const arrOfString2 : string[] = arrOfNumbers.map(number => number.toString());

    console.log(arrOfString2);


    type AreaNumber = {
        height : number ;
        width: number ;
    };

    type Hight = AreaNumber['height']  //lookup type

    type AreaString = {  // this is manually
        height : string;
        width: string ;
    }

    type AreaString2 = {
        [key in 'height' | 'weight'] : string
    }  // hardcore

    type AreaString3 = {
        [key in keyof AreaNumber] : string
    }
    
    // T => {height : string ; width: number}
    // key => ""
    type AreaString4<T> = {
        [key in keyof T] : T[key]
    }
    const area1 : AreaString4<{height:string; width:number}> = {
        height:'100',
        width:100 
    }






    //
}