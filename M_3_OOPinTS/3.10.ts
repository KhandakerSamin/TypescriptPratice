{
    //! Topic: Encapsulation in OOP 


    class BankAccount {
        public readonly id: number;
        public name: string ;
        protected balance: number;
        constructor(id: number, name:string,balance:number){
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        
        public addDeposit (ammount : number){
            this.balance = this.balance + ammount ;
        }

        private getBalance (){
            return this.balance ;
        }

        getHiddenMethod () {
            return this.getBalance()
        }
    }


    // class StudentAccount extends BankAccount {
    //     test(){
    //         this.
    //     }
    // }

    //? using of private and protected modifier


    const goribManushErAccunt = new BankAccount(111,'Mr. gorib', 20);

    // goribManushErAccunt.id =222;
    // goribManushErAccunt.balance=0;
    goribManushErAccunt.addDeposit(100);
    const myBalance = goribManushErAccunt.getBalance();
    console.log(myBalance);





    const repeatString = (string:string , num:number) => {

        for(let i = 0 ; i < num ; i++){
            console.log(`${string}`)
        }
    }

    repeatString('samin',5);


    




    //
}