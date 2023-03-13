class Customer{
    private firstName:string
    private lastName:string

constructor(firstName:string, lastName:string){
    this.firstName=firstName
    this.lastName=lastName
}


    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

let customers = new Customer("John","Smith");
customers.greeter()