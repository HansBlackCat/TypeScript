export {}

let message: string = "hello typescript";
console.log(message);

let x = 10; // define, can init without value
const y = 20; // define, can't init without value

// let x = 30; --Wrong
// const wrong; --Wrong

let sum;
const title = 'ConstTitle';

let isBeginner: boolean = true;
let totla: number = 0;
let name: string = 'LJB';
let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;
// null, undefined is all type's sub-type

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string,number] = ['Alegria', 23];

enum Color {Red=5, Green, Blue};
let c: Color = Color.Green
console.log(c);

let myVari: any = 10;
console.log(myVari.name);
// myVari();
// myVari.toUpperCase();

let unkVari: unknown = 10;
console.log(unkVari);
// (unkVari  as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;
b = 10;
// b = true; --Wrong

let multiType: number | Boolean
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

console.log("---------------------------------------------")

function add (num1:number, num2?:number):number
{
    if (num2)
        return num1+num2;
    else
        return num1;
}
add(5,10);
add(5);

interface Person {
    firstName: String;
    lastName: String;
    age:Number;
}

function fullName(person:Person)
{
    console.log(`${person.firstName} ${person.lastName} ${person.age}`);
}

let p = 
{
    firstName: 'Erlang',
    lastName: 'Alegria',
    age: 23
};

fullName(p);

console.log("---------------------------------------------")

class Employee {
    public emplyeeName: String;
    // private - accessibility within class
    // protected - accessibility within class and inherit

    constructor(name:String) {
        this.emplyeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.emplyeeName}`)
    }
}

let emp1 = new Employee('Ende');
console.log(emp1.emplyeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName:String) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegate tasks ${this.emplyeeName}`);
    }
}

let m1 = new Manager('Rumi');
m1.delegateWork();
m1.greet();
console.log(m1.emplyeeName);

