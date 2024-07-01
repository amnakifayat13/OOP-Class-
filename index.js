// let promise =new Promise(resolve, reject) => {
//     setTimeout(()=>{
//         let mood = "Angry";
//         if(mood=== "Fresh"){
//             resolve("Chalo")
//         }
//             else{                       
//                 reject("Phir Kabhi")
//             }
//         }, 1000)
// }
// promise. then((data)=>{console.log(data);
// }).catch((err)=>{console.log(err);
// })
// 25-06-2024
var Person = /** @class */ (function () {
    function Person(user_name, user_age) {
        this.name = user_name;
        this.age = user_age;
    }
    return Person;
}());
var p1 = new Person("Ali", 20);
var p2 = new Person("Amna", 20);
console.log(p1);
console.log(p2);
var Employee = /** @class */ (function () {
    // class.
    function Employee(name, age) {
        this.salary = 50000; // if a class property is private it can not be outside the class it will be in the inside the 
        this.name = name;
        this.age = age;
    }
    Employee.prototype.employeeSalary = function () {
        this.salary;
    };
    return Employee;
}());
var employee1 = new Employee("Ali", 25);
console.log(employee1);
