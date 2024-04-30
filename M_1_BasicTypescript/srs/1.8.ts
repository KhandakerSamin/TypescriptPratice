{



    // destructuring 

    const user = {
        id: 182,
        name: {
            firistName: "Khandaker",
            middleName: "Samin",
            lastName: 'Yeasar'
        },
        contactNo: '"01310892598',
        adress: "Ashulia"
    }

    const { contactNo, name: { middleName } } = user;


    // array destructuring 

    const myFriends = ['anik', 'pritom', 'shourov', 'rafi'];

    const [a, b, c] = myFriends;




}