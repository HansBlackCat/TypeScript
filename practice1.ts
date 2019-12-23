// https://velog.io/@velopert/typescript-basics

// <<Use Interface>>
interface Shape {
    getArea(): number;

};


class Circle implements Shape {
     // radius: number;

     constructor(private radius: number) {
         this.radius = radius;
     }

     /*
      * <Same>
      * constructor(public(or protected, private) radius: number) {
      *     this.radius = radius;
      * }
      */

     getArea() {
         return this.radius * this.radius * Math.PI; 
     }

}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width:number, height:number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];
console.log(shapes);
shapes.forEach(shape => {console.log(shape.getArea())});



var MakePoint = (something:any) => 1;
console.log(
MakePoint('lec')
);

const num: number[] = [1,2,3,4,5];
let numPackList: number[] = [];
const numPack = num.forEach((numberA:number) => numPackList.push(numberA * 3));
console.log(
    numPackList
);

// <<Interface in Object>>
interface Person {
    name: string;
    age?: number;
}
interface Developer {
    name: string;
    age?: number;
    skills: string[];
}

const person: Person = {
    name: 'Lee',
    age: 23
};
const developer: Developer = {
    name: 'Lee',
    skills: ['TypeScript', 'Haskell', 'Python']
}

interface Developer2 extends Developer {
    senior: Boolean
}
const developer2: Developer2 = {
    name: 'Lee',
    skills: ['TypeScript', 'Haskell', 'Python'],
    senior: true
}
const people: Person[] = [person,developer2];

// <<Type Alias>>
type PersonType =  {
    name: string;
    age?: number;
} ;
type DeveloperType = Person & { // &: add two type
    skills: string[];
};
const personType: PersonType = {
    name: 'Silvia'
};
const developerType: DeveloperType = {
    name: 'Silvia',
    skills: ['C', 'C++', 'Assembly']
};



