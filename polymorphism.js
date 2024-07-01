var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes a sound"));
    };
    return Animal;
}());
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.makeSound = function () {
        console.log("".concat(this.name, " neighs"));
    };
    return Horse;
}(Animal));
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck(name) {
        return _super.call(this, name) || this;
    }
    Duck.prototype.makeSound = function () {
        console.log("".concat(this.name, " Quack"));
    };
    return Duck;
}(Animal));
var animals = [
    new Horse("Tony"),
    new Duck("Chicky"),
    new Animal("Generic Animals"),
];
animals.forEach(function (animal) {
    animal.makeSound();
});
