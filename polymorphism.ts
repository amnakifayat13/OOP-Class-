class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    makeSound(): void{
        console.log(`${this.name} makes a sound`);
        
    }
}

class Horse extends Animal{
    constructor(name: string){
        super(name);
    }
    makeSound(): void {
        console.log(`${this.name} neighs`);
        
    }
}

class Duck extends Animal{
    constructor(name: string){
        super(name);
    }
    makeSound(): void {
        console.log(`${this.name} Quack`);
        
    }
}

let animals: Animal[] = [
    new Horse("Tony"),
    new Duck("Chicky"),
    new Animal("Generic Animals"),
]
animals.forEach((animal)=>{
    animal.makeSound();
}) 