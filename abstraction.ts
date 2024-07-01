// abstraction
interface IAnimal{
    name: string;
    speak(): string;
}

class Dog implements IAnimal{
    public name: string;
    constructor(name:string){
        this.name = name;

    }
    public speak(): string{
        return "Woof!";
    }
}
class Cat implements IAnimal{
    public name: string;
    constructor(name:string){
        this.name = name;

    }
    public speak(): string {
        return "Meow!";
    }
}

// usage
let dog: IAnimal = new Dog("Tony");
console.log(`${dog.name} says ${dog.speak()}`);
let cat: IAnimal = new Cat("Kitty");
console.log(`${cat.name} says ${cat.speak()}`);

