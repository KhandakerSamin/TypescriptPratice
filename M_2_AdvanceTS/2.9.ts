{
    //! Conditional Type

    type a1 = null  //or number
    type b1 = undefined 

    //? Conditional type x  
    type x1 = a1 extends null ? true : false ;  // true
    type x2 = a1 extends null ? true : false ;  // false when a1 number

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any ;

    type Sheikh = {
        bike : string;
        car: string;
        ship: string;
        plane: string
    }

    // car ase kina / bike ase kina / ship ase kina / trak ase kina
    type CheckVehicle1 <T> = T extends keyof Sheikh ? true : false  // using keyof
    type CheckVehicle2 <T> = T extends "bike" | "car" | "ship" ? true : false  // hardcore
    type HasBike = CheckVehicle1<"car">   //true
    type HasShip = CheckVehicle2<"ship">  //true 
    type HasTrack = CheckVehicle1<"track">  //false
    type HasPlane = CheckVehicle1<"plane">  //True







    //
}