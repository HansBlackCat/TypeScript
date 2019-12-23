"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "hello typescript";
console.log(message);
var x = 10; // define, can init without value
var y = 20; // define, can't init without value
// let x = 30; --Wrong
// const wrong; --Wrong
var sum;
var title = 'ConstTitle';
var isBeginner = true;
var totla = 0;
var name = 'LJB';
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// null, undefined is all type's sub-type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Alegria', 23];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var myVari = 10;
console.log(myVari.name);
// myVari();
// myVari.toUpperCase();
var unkVari = 10;
console.log(unkVari);
// (unkVari  as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
b = 10;
// b = true; --Wrong
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
console.log("---------------------------------------------");
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName + " " + person.age);
}
var p = {
    firstName: 'Erlang',
    lastName: 'Alegria',
    age: 23
};
fullName(p);
console.log("---------------------------------------------");
var Employee = /** @class */ (function () {
    // private - accessibility within class
    // protected - accessibility within class and inherit
    function Employee(name) {
        this.emplyeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.emplyeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Ende');
console.log(emp1.emplyeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegate tasks " + this.emplyeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Rumi');
m1.delegateWork();
m1.greet();
console.log(m1.emplyeeName);
