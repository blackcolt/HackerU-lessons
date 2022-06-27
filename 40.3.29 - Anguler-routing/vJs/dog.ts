class Dog {
  name: string;
  set age(value: number){
    this.age = value
  }
  constructor(name?: string, age?: number){
    this.name = name ?? 'rexi';
    // this.age = age ?? 1;
    this.setAge(age);
  }
  setAge(age: number){
    if(age > 0 && age < 200){
      this.age = age
    }
  }
  
  
}
let rexy = new Dog('idan', -40)
rexy.age = 10
console.log(rexy.age)

// rexy.setAge(-90);
// rexy.setAge(30)