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

    const myFriends = ['anik', 'pritom', 'shourov', 'rafi','yousof','nadia','jannat'];

    const [a, b, besfriend] = myFriends; // desructured
    const [,, bestfriend2] = myFriends // if want to skif first names.
    const [,,besfriend3, ...rest] = myFriends; // it will store rest names in the rest variable




}