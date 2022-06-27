class School {
    static school: School
    static getSharedSchool(){
        if (!School.school){
            School.school = new School()
        }
        return School.school
    }
    persons: Person[] = []
    addPerson(person: Person) {
        this.persons.push(person)
    }
    deletePersonByName(n: string){
        this.persons = this.persons.filter(person => person.name === n)
    }
}

let school = School.getSharedSchool()

class Person {
    name: string

}
class SchoolWorker {

}

class TeacStaff {

}

class Student {

}

class Teacher{

}
class Proffessor {

}

class Genetor{

}


