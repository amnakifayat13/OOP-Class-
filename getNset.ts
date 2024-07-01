class GetNSet{
    private _name: string;
    constructor(name:string){
        this._name=name;
    }
    get name(): string{
        return this._name;
    }
    set name(value:string){
        this._name = value;
    }
}
let result = new GetNSet("Amna");
let r1 = new GetNSet("Kifayat")
console.log(result);
console.log(r1);


class CodeGetSet{
    private code: number;
    constructor(code:number){
        this.code = code ;
    }
    get _code():number{
        return this.code;
    }
    set _code(value: number){
        this.code = value;
    }
}
let result1 = new CodeGetSet(123);
console.log(result1);



class Attendance{
    private present: boolean;
    constructor(present:boolean){
        this.present = present
    }
    get _present():boolean{
        return this.present;
    }
    set _present(value: boolean){
        this.present = value;
    }
}
let result2 = new Attendance(true);
console.log(result2);

