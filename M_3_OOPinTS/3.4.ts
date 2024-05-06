{
    //! Topic : using type guard sing intence of

    class Animal {
        name: string ;
        species: string ;

        constructor (name: string, species: string) {
            this.name= name;
            this.species= species;
        }

        makeSound() {
            console.log(`I am ${this.name} making sound`)
        }
    }

    class Dog extends Animal {
        constructor (name: string , species: string){
            super(name,species);
        }
        makeBark(){
            console.log(`I am Dog. So iam barking`)
        }
    }
    class Cat extends Animal {
        constructor (name: string , species: string){
            super(name,species);
        }
        makeMew(){
            console.log(`I am Cat. So iam Mewing`)
        }
    }



    // handle in smart way ---> use function 

    const isDog = (animal : Animal) : animal is Dog => {
        return animal instanceof Dog 
    }
    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat 
    }


    const getAnimal = (animal : Animal) => {
        if( isDog(animal)){
            animal.makeBark()
        }else if(isCat(animal)){
            animal.makeMew()
        }else{
            animal.makeSound()
        }
    }

    

    const dog = new Dog('Oscar', 'Dog');
    console.log(dog);
    // dog.
    const cat = new Cat('puchu', 'cat');
    console.log(cat);
    // cat.


    getAnimal(dog)
    getAnimal(cat)





    //
}