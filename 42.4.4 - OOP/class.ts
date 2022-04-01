abstract class Animle {
    name:string;
    age: number;
    protected constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }
    makeNoise(): void{}
}

class Dog extends Animle {
    override makeNoise(): void {}
}
class Cat extends Animle {
    override makeNoise(): void {}
}

class Sneak extends Animle {
    override makeNoise(): void {}
}

