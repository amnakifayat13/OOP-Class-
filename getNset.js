var GetNSet = /** @class */ (function () {
    function GetNSet(name) {
        this._name = name;
    }
    Object.defineProperty(GetNSet.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return GetNSet;
}());
var result = new GetNSet("Amna");
var r1 = new GetNSet("Kifayat");
console.log(result);
console.log(r1);
var CodeGetSet = /** @class */ (function () {
    function CodeGetSet(code) {
        this.code = code;
    }
    Object.defineProperty(CodeGetSet.prototype, "_code", {
        get: function () {
            return this.code;
        },
        set: function (value) {
            this.code = value;
        },
        enumerable: false,
        configurable: true
    });
    return CodeGetSet;
}());
var result1 = new CodeGetSet(123);
console.log(result1);
var Attendance = /** @class */ (function () {
    function Attendance(present) {
        this.present = present;
    }
    Object.defineProperty(Attendance.prototype, "_present", {
        get: function () {
            return this.present;
        },
        set: function (value) {
            this.present = value;
        },
        enumerable: false,
        configurable: true
    });
    return Attendance;
}());
var result2 = new Attendance(true);
console.log(result2);
