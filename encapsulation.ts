class encap{
    private name: string;
    private age: number;
    private id: number;
    constructor(name:string, age: number, id: number){
        this.name= name;
        this.age= age;
        this.id= id;
    }
    display(){
        return (`Name: ${this.name} Age: ${this.age} ID: ${this.id}`  );
        
    }
}

let result5 = new encap("Amna", 30, 12345);
console.log(result5.display());
