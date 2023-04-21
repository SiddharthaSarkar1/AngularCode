//Class
class Employee{
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}.`);
    }
}

class Manager extends Employee{
    constructor(managerName : string){
        super(managerName);
    }

    delegateWork(){
        console.log(`Manager ${this.employeeName.toLowerCase()} delegating tasks.`);
    }
}

let employee1 = new Employee('Sid');
console.log(employee1.employeeName);
employee1.greet();

let manager1 = new Manager('Shiva');
console.log(manager1.employeeName);
manager1.greet();
manager1.delegateWork();