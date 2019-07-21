// there are the follow code you have to build the father class and the getDimensions methods

class Furniture{
    protected highFurniture: number;
    protected withFurniture: number;
    protected deepFurniture: number;

constructor(
        highArg: number,
        deepArg: number,
        withArg: number
    ){
        this.highFurniture = highArg;
        this.withFurniture = withArg;
        this.deepFurniture = deepArg;
    }
}

class TV extends Furniture{
    getDimensions():number{
        return this.highFurniture * this.withFurniture;
    }
}

class Couch extends Furniture{
    getDimensions():number{
        return this.highFurniture * this.withFurniture * this.deepFurniture;
    }
}

let tv = new TV(12,2,5);
let couch = new Couch(6,6,12);

console.log(tv.getDimensions());
console.log(couch.getDimensions());

