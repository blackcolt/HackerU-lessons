interface noiseable {
    makeNoise(): void
}

class Zoo {
    isOpen: boolean;
    animals: Animale[];
    static Zoo: Zoo;
    private _areas: string[] = [
        "A1",
        "B3",
        "D3",
        "R4",
        "U3",
        "M3",
    ]
    getAreas(){
        return this._areas;
    }
    name: string = ''
    location : string = ''
    constructor(name: string, location: string, isOpen: boolean){
        this.name = name;
        this.isOpen = isOpen;
        this.location = location;
        this.animals = []
    }
    static isLetter(c: string) {
        return c.toLowerCase() != c.toUpperCase();
    }
    static isNumber(c: string) {
        return c.toLowerCase() == c.toUpperCase();
    }
    addArea(area: string){
        if(area.length === 2 && Zoo.isLetter(area[0]) && Zoo.isNumber(area[1])){
            if (!this._areas.includes(area)){
                this._areas.push(area)
            }
        } else {
            // throw('invalid area')
        }
    }
    getDogs(){
        return this.animals.filter(animle=>animle instanceof Dog)
    }
    getPets(){
        return this.animals.filter(animle=>animle instanceof Pet)
    }
    getBIrds(){
        return this.animals.filter(animle=>animle instanceof Bird)
    }
    addAnimle(animle: Animale){
        this.animals.push(animle)
    }
    addAnimles(animles: Animale[]){
        this.animals.push(...animles) 
        // this.animals.push(animle)
    }
    static getShredInstance(): Zoo{
        if (!Zoo.Zoo){
            Zoo.Zoo = new Zoo('the awasome zoo','some location', true);
        }
        return Zoo.Zoo;
    }

    allZooMakeNoise(){
        this.animals.forEach(animle=>animle.makeNoise())
    }
}

abstract class Animale implements noiseable {
    canEscape: boolean;
    livingArea: string = '';
    name: string = '';
    constructor(name: string,livingArea: string, canEscape: boolean){
        this.name = name
        this.setLivingArea(livingArea)
        this.canEscape = canEscape
    }
    makeNoise(){
        console.log('random noise')
    }
    // set name(name: string){
    //     if(name.length > 1){
    //         this.name = name;
    //     }
    // }
     setLivingArea(livingArea: string){
        if(Zoo.getShredInstance().getAreas().includes(livingArea)){
           this.livingArea = livingArea;  
        } else {
            this.livingArea = Zoo.getShredInstance().getAreas()[0]
        }
    }
}

abstract class Bird extends Animale {
    canFly: boolean = false;
    beakSize:number = 0
}

class Pinguin extends Bird {
    haveMate: boolean = false;
    haveStone: boolean = false;
}

class Eagle extends Bird {
    isInDengour: boolean = false;
    isBald: boolean = false;
}

abstract class Pet extends Animale {
    private _owner: string = ''
    getOwner(){
        if(this._owner === ''){
            return 'no owner setted'
        }
        return this._owner;
    }
    legs: number = 0;
}





abstract class SeaAnimle extends Animale {
    isSaltWater: boolean = false;
    canSwim: boolean = false;
    isDoLife: boolean = false;
}

class Shark extends SeaAnimle {
    finLength: number = 0;
    teethNumber: number = 0;
}

class Fish extends SeaAnimle {
    static breads: string [] = [
        'gold fish',
        'cleaning fish',
        'monk fish',
        'blowfish'
    ]
    canBeEaten: boolean = false;
    bread: string = '';
    constructor(name: string,livingArea: string, canEscape: boolean,  canBeEaten: boolean, bread: string){
        super(name,livingArea, canEscape)
        this.canBeEaten = canBeEaten;
        this.setBread(bread)
    }
    setBread(bread: string){
        if (Fish.breads.includes(bread)) {
            this.bread = bread;
        } else {
            this.bread = Fish.breads[0];
        }
    } 
}

class Dog extends Pet {
    makeNoise(){
        console.log("woof!!")
    }
}

class Cat extends Pet {
    makeNoise(){
        console.log("mioo!!")
    }
}

let nemo = new Fish('nemo', 'A', false, true,'cleaning fish')
let dog = new Dog('chepe','R4', true);
let catty = new Cat('chepe','R4', true);

let pingy = new Pinguin('pingy', 'M3', false)

let zoo = Zoo.getShredInstance()
zoo.addAnimle(nemo)
zoo.addAnimle(catty)
zoo.addAnimle(dog)
zoo.addAnimle(pingy)
zoo.addAnimles([nemo, dog, pingy])

// console.dir(zoo.allZooMakeNoise())
zoo.getAreas()