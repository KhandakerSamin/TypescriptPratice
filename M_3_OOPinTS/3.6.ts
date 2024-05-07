{
    //! Topic : Getter And Setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }

        // public addDeposit (ammount : number){
        //     this.balance = this.balance + ammount ;
        // }

        set deposit(ammount: number) {
            this.balance = this.balance + ammount;
        }

        //? using getter : 
        get balance2() {
            return this.balance;
        }

        // public getBalance() {
        //     return this.balance;
        // }
    }


    const goribManushErAccunt = new BankAccount(111, 'Mr. gorib', 20);
    // goribManushErAccunt.
    goribManushErAccunt.deposit = 100;


    const myBalance = goribManushErAccunt.balance2;  // as like property
    console.log(myBalance)













    //
}