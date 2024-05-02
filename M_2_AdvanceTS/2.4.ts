{
    //! Topic : interfaca with generic 


    interface Developr<T, X = null> {
        name: string;
        computer: {
            brand: string,
            model: string,
            relaseYear: number
        },
        smartWatch: T;
        bike?: X;
    }


    type EmilabWatch = {
        brand: string, model: string, display: string
    }


    const poorDeveloper: Developr<EmilabWatch> = {
        name: "Samin",
        computer: {
            brand: 'lenevo',
            model: '10th Gen',
            relaseYear: 2019
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'm2',
            display: 'Amoled'
        }
    }


    interface AppleWatch {
        brand: string, model: string, display: string, watarResistence: boolean
    }

    type YamhaByke = {
        brand: string;
        model: string;
        speed: number
    }


    const richDeveloper: Developr<AppleWatch, YamhaByke> = {
        name: "Samin",
        computer: {
            brand: 'Apple',
            model: 'M3 Pro',
            relaseYear: 2023
        },
        smartWatch: {
            brand: 'Apple',
            model: 'watch3',
            display: 'Oled',
            watarResistence: true
        },
        bike: {
            brand: 'yamha',
            model: 'R15',
            speed: 200
        }
    }









    //
}