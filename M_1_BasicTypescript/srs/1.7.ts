{
    
    // Spreed Oparator
    // Rest Oparator
    // Destructuring 



    // learn spread oparator 

    const bros1: string[] = ['samin','anik','shourov']
    const bros2: string[] = ['pritom', 'yousof', 'rafi']

    bros1.push(...bros2);  // using spred operator for push an arry direct

    const mentors1 = {
        typescript : 'Mezba',
        redux: 'Mir', 
        dbms: 'Mizan'
    }

    const mentors2 = {
        prisma: 'Firoz',
        nextJs: 'tonmoy',
        cloud: 'nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }




    // learning Rest oparator 

    // const greedFriends = (friedn1:string, friend2:string, friend3 :string) => {
    //     console.log(`Hi ${friedn1} ${friend2} ${friend3}`)
    // }

    // greedFriends('abul', 'kabul', 'babul', 'ubol' , 'labul')


    const greedFriends = (...friends :string[]) => {
        friends.forEach((friend : string) => console.log(`Hi ${friend}`))
    }

    greedFriends('abul', 'kabul', 'babul', 'ubol' , 'labul')




}