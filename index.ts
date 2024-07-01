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
 class Person{
    name: string;
    age: number;
    constructor (user_name: string, user_age: number){
        this.name = user_name; 
        this.age = user_age;        
 }
    
 }
  let p1 = new Person("Ali", 20);
  let p2 = new Person("Amna", 20);
  console.log(p1);
  console.log(p2);
  

class Employee {
    name: string;
    age: number;
    private salary = 50000;// if a class property is private it can not be outside the class it will be in the inside the 
    // class.
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    employeeSalary(){
        this.salary 
    }

}
let employee1 = new Employee("Ali", 25)
console.log(employee1);

  
  
  
  