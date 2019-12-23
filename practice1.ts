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

type PersonList = PersonType[];
const peopleList: PersonList = [personType, developerType];

type Color = 'Red' | 'Blue' | 'Yellow';
const color: Color = 'Red';
const colors: Color[] = ['Red', 'Blue'];

// <<Generic>>
function merge(a:any, b:any): any {
    return {
        ...a,
        ...b
    };
}
const merged = merge({foo:1}, {bar:1});
console.log(merged);

function merge2<A,B>(a:A, b:B): A&B {
    return {
        ...a,
        ...b
    };
}
const merged2 = merge2({foo:1}, {bar:1});
console.log(merged2);

function wrap<T>(param: T) {
    return {
        param
    };
}
const wrapped = wrap(true);

interface Items<T> {
    list: T[]
}
const items: Items<string> = {
    list: ['potion', 'sword', 'shield']
}

class Queue<T> {
    private list: T[] = [];
    
    /*
    get sort() {
        return this.list.sort();
    }*/
    
    iawayslike3 = () => 3


    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(3);
queue.enqueue(8);
queue.enqueue(3);
queue.enqueue(6);
console.log(queue);
console.log(queue.dequeue());
//console.log(queue.sort);

let funcTest = () =>1

let a: Array<number> = [3,2,7,5]
console.log('<<SandBox>>');
console.log(a);
console.log(
    a.reduce((a,b)=>
    {if (b<5)
        return a-1
    else return a+b}
    ,0), 
)

type vector = [number, number];
function moveKnight(currentPosition: vector) {
    let [tempa,tempb] = currentPosition
    let tempArr: vector[] = [];
    ((tempa, tempb) => {tempArr.push(
        [tempa+1, tempb+2],
        [tempa+1, tempb-2],
        [tempa-1, tempb+2],
        [tempa-1, tempb-2],
        [tempa+2, tempb+1],
        [tempa+2, tempb-1],
        [tempa-2, tempb+2],
        [tempa-2, tempb-1]
    )})(tempa, tempb)
    let arr = tempArr.filter(([a,b]) => 0<a&&a<9&&0<b&&b<9)
    return arr
}
function recurKnight(piled:vector[], recurN:number) {
    if (recurN==0) {return piled}
    let recurArr:vector[] = []
    let avalanche:vector[][] = piled.map(x=>moveKnight(x))
    let newPiled:vector[] = avalanche.reduce((acc, curr)=>acc.concat(curr),[]);
    return recurKnight(newPiled, recurN-1);
}
console.log(
    recurKnight([[1,2]], 5)
)