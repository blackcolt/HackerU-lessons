// interface canMakeNoise {
//     makeNoise(): void
// }

class Animal {
    name: string
    bread: string
    gender : string
    numberOfLegs: number
    makeNoise(): void {
        console.log('noise')
    }
}

class Dog extends Animal  { 
    override makeNoise(): void {
        super.makeNoise()
        console.log('whoof!')
    }
}

class Cat extends Animal {   
    override makeNoise(): void {
        console.log('mioooo!')
    }
}

class Sneak extends Animal {   
    override makeNoise(){}
}

let x = new Dog()
x.makeNoise()

new Cat().makeNoise()
