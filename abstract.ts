abstract class BioData{
    private name: string;
    protected age: number;
    public address: string;
    constructor(name: string, age: number, address: string){
        this.name= name;
        this.age = age;
        this.address = address;
        console.log(`${this.name}`)
    }
   ;
    abstract display(): void;
   
    
}

class Self extends BioData{
    public display():void{
        // console.log(`${this.name}`);
        console.log(`${this.age}`);
        console.log(`${this.address}`);
        
        
        
    }
}
let obj = new Self("Amna", 30, "Karachi");
obj.display();