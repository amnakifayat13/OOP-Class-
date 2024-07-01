var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.speak = function () {
        return "Woof!";
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.speak = function () {
        return "Meow!";
    };
    return Cat;
}());
// usage
var dog = new Dog("Tony");
console.log("".concat(dog.name, " says ").concat(dog.speak()));
var cat = new Cat("Kitty");
console.log("".concat(cat.name, " says ").concat(cat.speak()));
