let userName: string = 'peter'

class Person{
    firstName:string;
    lastName:string;
    age:number

    constructor(firstName:string,lastName:string,age:number) {
        this.firstName=firstName        
        this.lastName =lastName
        this.age=age
    }

    showInfo() {
        console.log(`Am ${this.firstName} ${this.lastName} of age ${this.age}`)
    }
}

const person = new Person('peter','wahu',22)
const person2 = new Person('shakirah','muthoni',21)
person.showInfo()
person2.showInfo()
