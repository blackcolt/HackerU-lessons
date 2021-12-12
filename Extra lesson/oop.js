class Person {
    #name;
    #lastName 
    constructor(name, lastName){
        this.#name = name;
        this.#lastName = lastName;
    }
}

class Student extends Person {
    #age
    constructor(name, lastName, age){
        super(name, lastName);
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }
}
const student = new Student("idan", "magled", 20);
console.log(student.getAge());