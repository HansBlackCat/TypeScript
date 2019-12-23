// https://velog.io/@velopert/typescript-basics
;
var Circle = /** @class */ (function () {
    // radius: number;
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    /*
     * <Same>
     * constructor(public(or protected, private) radius: number) {
     *     this.radius = radius;
     * }
     */
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
console.log(shapes);
shapes.forEach(function (shape) { console.log(shape.getArea()); });
var MakePoint = function (something) { return 1; };
console.log(MakePoint('lec'));
var num = [1, 2, 3, 4, 5];
var numPackList = [];
var numPack = num.forEach(function (numberA) { return numPackList.push(numberA * 3); });
console.log(numPackList);
var person = {
    name: 'Lee',
    age: 23
};
var developer = {
    name: 'Lee',
    skills: ['TypeScript', 'Haskell', 'Python']
};
var developer2 = {
    name: 'Lee',
    skills: ['TypeScript', 'Haskell', 'Python'],
    senior: true
};
var people = [person, developer2];
var personType = {
    name: 'Silvia'
};
var developerType = {
    name: 'Silvia',
    skills: ['C', 'C++', 'Assembly']
};
