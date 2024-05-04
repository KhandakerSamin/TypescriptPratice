{
    //! Topic : Calss 

    class Animal {
        public name: string;
        public species: string;
        public sound: string;

        // parameter properties 

        constructor( name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }
    

    const dog = new Animal('Oscar', 'Dog', 'Gheu GHeu');
    const cat = new Animal('Pochu', 'cat', 'meew meew');


    cat.makeSound()



    class Animal {
        public name: string;
        public species: string;
        public sound: string;

        // parameter properties 

        constructor( name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }




    //
}