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
var BioData = /** @class */ (function () {
    function BioData(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        console.log("".concat(this.name));
    }
    ;
    return BioData;
}());
var Self = /** @class */ (function (_super) {
    __extends(Self, _super);
    function Self() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Self.prototype.display = function () {
        // console.log(`${this.name}`);
        console.log("".concat(this.age));
        console.log("".concat(this.address));
    };
    return Self;
}(BioData));
var obj = new Self("Amna", 30, "Karachi");
obj.display();
