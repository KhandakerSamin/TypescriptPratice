{
    //! Topic : Abstraction in OOP
    //? two types : 1. interface  2. abstact


    // getting idea
    interface Vehicle1 {
        startEngine():void ;
        stopEngine():void;
        move():void;
    }

    // const vehicle1 : Vehicle1 = {
    //     name: 'toyota',
    //     model:222
    // }

    // real implementation 
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`Iam starting the car engine`)
        }
        stopEngine(): void {
            console.log(`Iam stopping the car engine`)
        }
        move(): void {
            console.log(`Iam moving the car`)
        }
        test(){
            console.log(`Iam just testing`)
        }
    }


    const tyotaCar = new Car1();
    tyotaCar.startEngine();



    //? Using the abstrac class

    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void 
        test(){
            console.log(` Iam just testing`)
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            
        }
    }

    const hondaCar = new Car2();
    hondaCar.startEngine()




    //
}