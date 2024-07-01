var Encap = /** @class */ (function () {
    function Encap(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    Encap.prototype.display = function () {
        return ("Name: ".concat(this.name, " Age: ").concat(this.age, " ID: ").concat(this.id));
    };
    return Encap;
}());
var result5 = new Encap("Amna", 30, 12345);
console.log(result5.display());
