class Car{
    num: number;
    private numPrivate: number;
    readonly numReadOnly: number;
    protected numProtected: number;

    constructor(num:number){
        this.num = num;
        this.numPrivate = num + 1;
        this.numReadOnly = num + 2;
        this.numProtected = num + 3;
    }
    printNum(){
        console.log(this.num);
    }
}

let lexus = new Car(1);

console.log(lexus.num);

lexus.printNum();

// console.log(lexus.numPrivate);  // error property private

// lexus.numReadOnly = 2; // error property read only we can't assign a value

let b = lexus.numReadOnly;

console.log(b);

class Van extends Car {
    printNum(){
        console.log(this.numProtected);
        // console.log(this.numPrivate);  // error private variable not can't access
    }
}

let mazda = new Van(1);

mazda.printNum();
