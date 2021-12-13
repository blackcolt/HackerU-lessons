class Person {
    #name;
    #lastName 
    #tz
    #age
    constructor(name, lastName, tz, age){
        this.#name = name;
        this.#lastName = lastName;
        this.#tz = tz;
        this.#age = age > 0 ? age : 18;
    }
    get name() {
        return this.#name;
    }
    get lastName() {
        return this.#name;
    }
    get tz() {
        return this.#name;
    }
    get age() {
        return this.#name;
    }
}
class Student extends Person {
    #grade
    constructor(name, lastName, tz, age, grade){
        super(name, lastName,tz, age);
        this.#grade = grade;
    }
    get grade() {
        return this.#grade;
    }
}

class Teacher extends Person {
    #role
    constructor(name, lastName, tz, age){
        super(name, lastName,tz, age);
    }
}

class SubTeacher extends Teacher {
    #endDate
    constructor(name, lastName, tz, age, endDate){
        super(name, lastName, tz, age);
        this.#endDate = endDate;
    }
}

const yarin = new Student("yarin","levi","034234234",22, 95);
debugger
yarin.grade
yarin.age

// yarin.#name = 90






// const student = new Student("idan", "magled", 20);
// console.log(student.getAge());









// Dog {
//     legs,
//     zanav
//     fer
//     makeNoise {
//         console.log(offf)
//     }
// }


// Cat {
//     legs,
//     zanav
//     fer
//     makeNoise {
//         console.log(meoooow)
//     }
// }


// Animle {
//     //     legs,
// //     zanav
// //     fer
// //     makeNoise {
// //         console.log(meoooow)
// //     }
// }