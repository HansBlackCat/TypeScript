// https://velog.io/@velopert/typescript-basics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var peopleList = [personType, developerType];
var color = 'Red';
var colors = ['Red', 'Blue'];
// <<Generic>>
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
function merge2(a, b) {
    return __assign(__assign({}, a), b);
}
var merged2 = merge2({ foo: 1 }, { bar: 1 });
console.log(merged2);
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(true);
var items = {
    list: ['potion', 'sword', 'shield']
};
var Queue = /** @class */ (function () {
    function Queue() {
        this.list = [];
        /*
        get sort() {
            return this.list.sort();
        }*/
        this.iawayslike3 = function () { return 3; };
    }
    Queue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(3);
queue.enqueue(8);
queue.enqueue(3);
queue.enqueue(6);
console.log(queue);
console.log(queue.dequeue());
//console.log(queue.sort);
var funcTest = function () { return 1; };
var a = [3, 2, 7, 5];
console.log('<<SandBox>>');
console.log(a);
console.log(a.reduce(function (a, b) {
    if (b < 5)
        return a - 1;
    else
        return a + b;
}, 0));
function moveKnight(currentPosition) {
    var tempa = currentPosition[0], tempb = currentPosition[1];
    var tempArr = [];
    (function (tempa, tempb) {
        tempArr.push([tempa + 1, tempb + 2], [tempa + 1, tempb - 2], [tempa - 1, tempb + 2], [tempa - 1, tempb - 2], [tempa + 2, tempb + 1], [tempa + 2, tempb - 1], [tempa - 2, tempb + 2], [tempa - 2, tempb - 1]);
    })(tempa, tempb);
    var arr = tempArr.filter(function (_a) {
        var a = _a[0], b = _a[1];
        return 0 < a && a < 9 && 0 < b && b < 9;
    });
    return arr;
}
function recurKnight(piled, recurN) {
    if (recurN == 0) {
        return piled;
    }
    var recurArr = [];
    var avalanche = piled.map(function (x) { return moveKnight(x); });
    var newPiled = avalanche.reduce(function (acc, curr) { return acc.concat(curr); }, []);
    return recurKnight(newPiled, recurN - 1);
}
console.log(recurKnight([[1, 2]], 5));
