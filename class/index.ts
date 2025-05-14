// class Bank{
//     private static allBanks: Bank[] = []
//     private customer: Customer[] = []
    
//     constructor(public readonly id: string, public readonly name: string, public readonly country, private _totalBalance: number = 0) {
//         Bank.allBanks.push(this)
//     }
//     static getBanks(): Bank[]{
//         return Bank.allBanks
//     }
//     static getBankById(id: string): Bank | undefined{
//         return Bank.allBanks.find(bank=>bank.id===id)
//     }
//     registerCustomer(customer: Customer) {
//         if (this.customer.some(c => c.id === customer.id)) {
//             throw new Error(`Customer with ID ${customer.id} already exists in ${this.name}`);
//         }
//         this.customer.push(customer)
//         console.log(`${customer.name} registered with ${this.name}`);
//     }
//     getCustomers(): Customer[] {
//         return [...this.customer];
//     }
// }
// class Customer {
//     public readonly id: string
//     public readonly name: string
//     public balance: number = 0
//     public readonly bankId: string
    
//     constructor(id:string, name:string, number:number, bankId:string) {
//         this.id = id
//         this.name = name
//         this.balance = this.balance
//         this.bankId=bankId
//     }




abstract class Person{
    protected id:number
    protected email:string
    protected name: string
    protected role: 'admin' | 'lecture' | 'student'
    constructor(id:number,name:string,email:string) {
        this.id = id
        this.name = name
        this.email=email
    }
    public getRole() {
        return this.role
    }
    get getName(){
        return this.name
    }

}


class Admin extends Person{
    constructor(id:number,name:string,email:string) {
        super(id, name, email)
        this.role='admin'
    }
}

class Lecture extends Person{
    private subjects:Subject[]=[]
    constructor(id: number, name: string, email: string) {
        super(id, name, email)
        this.role='lecture'
    }
    get unitsTaught() {
        return this.subjects
    }
    assignToSubject(subject) {
        if (this.subjects.length <= 3) {
            this.subjects.push(subject)
        }
    }
}
class Student extends Person{
    course:string
    constructor(id: number, name: string, email: string) {
        super(id, name, email)
        this.role='student'
    }
}

// each course e.g Information Technology
class Course{
    private title: string
    private classTeacher:Lecture
    private student:Student[]=[]
    private subjects:Subject[]=[]
    constructor() {
        
    }
    set setClassTeacher(lecture: Lecture) {
        this.classTeacher=lecture
    }
    addSubject(subject: Subject) {
        this.subjects.push(subject)
    }
}

// each unit per course e.g  Data Structures
class Subject {
    public lecturer: Lecture | null = null;

    constructor(
        public code: string, 
        public title: string,
        // public academicYear: AcademicYear,
        public creditHours: number,
        private program: Course
    ) {
        program.addSubject(this);
    }

    assignLecturer(lecturer: Lecture) {
        this.lecturer = lecturer;
        lecturer.assignToSubject(this);
    }
  }








