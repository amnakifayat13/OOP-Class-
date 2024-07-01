class Father{
    public land: number;
    public house: number;
    constructor(land: number, house: number){
        this.land = land;
        this.house = house;
    }
    fatherProperty(){
        console.log(`Number of Lands: ${this.land}`);
        console.log(`Number of House: ${this.house}`);
        
        
    }
}
class Child extends Father{
    private car: string;
    constructor(land:number, house: number, car: string){
        super(land, house);
        this.car = car
    }
    childProperty(){
      super.fatherProperty();
      console.log(`I have my own vehicle ${this.car}`);
      
        
    }
}

let result3 = new Child(25, 2, "Honda");
console.log(result3);


// another program

class School{
    public teachers: number;
    public students: number;
    constructor(teachers: number, students: number){
        this.teachers=teachers;
        this.students=students;
    }
    school(){
        console.log(`Total Teachers: ${this.teachers}`);
        console.log(`Total Students: ${this.students}`);
        
        
    }
}
class SchoolDetail extends School{
    private classRooms: number;
    constructor(teachers: number, students: number, classRooms: number){
        super(teachers, students);
        this.classRooms=classRooms;
    }
    classRoomsProperty(){
        super.school();
        console.log(`Total Class Rooms: ${this.classRooms}`);
        
    }
}
let result4 = new SchoolDetail(25, 1000, 20);
console.log(result4);



