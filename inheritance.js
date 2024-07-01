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
var Father = /** @class */ (function () {
    function Father(land, house) {
        this.land = land;
        this.house = house;
    }
    Father.prototype.fatherProperty = function () {
        console.log("Number of Lands: ".concat(this.land));
        console.log("Number of House: ".concat(this.house));
    };
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(land, house, car) {
        var _this = _super.call(this, land, house) || this;
        _this.car = car;
        return _this;
    }
    Child.prototype.childProperty = function () {
        _super.prototype.fatherProperty.call(this);
        console.log("I have my own vehicle ".concat(this.car));
    };
    return Child;
}(Father));
var result3 = new Child(25, 2, "Honda");
console.log(result3);
// another program
var School = /** @class */ (function () {
    function School(teachers, students) {
        this.teachers = teachers;
        this.students = students;
    }
    School.prototype.school = function () {
        console.log("Total Teachers: ".concat(this.teachers));
        console.log("Total Students: ".concat(this.students));
    };
    return School;
}());
var SchoolDetail = /** @class */ (function (_super) {
    __extends(SchoolDetail, _super);
    function SchoolDetail(teachers, students, classRooms) {
        var _this = _super.call(this, teachers, students) || this;
        _this.classRooms = classRooms;
        return _this;
    }
    SchoolDetail.prototype.classRoomsProperty = function () {
        _super.prototype.school.call(this);
        console.log("Total Class Rooms: ".concat(this.classRooms));
    };
    return SchoolDetail;
}(School));
var result4 = new SchoolDetail(25, 1000, 20);
console.log(result4);
