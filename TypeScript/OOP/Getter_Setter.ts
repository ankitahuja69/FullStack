class Emp {
    private _age: number;
    
    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 100) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getAge(): number {
        return this._age;
    }
}

var EmpObj=new Emp();
EmpObj.age=110;
console.log(EmpObj.getAge());