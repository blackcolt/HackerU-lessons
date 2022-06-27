class User {
  private name: string;
  private age: number;
  private total: number
  private items: Item[];
  private static user: User = null;
  // private static user: User = null;
  private constructor(name?: string, age?: number, total?: number){
    this.name = name;
    this.age = age;
    this.total = 0;
  }
  setAge(age: number){
    if (age > 0) {
      this.age = age
    }
  }
  addItem(item: Item){
    this.items.push(item);
  }
  static getShredUser(){
    // this.user 
    if (User.user === null){
      User.user = new User()
    }
    return User.user
  }
}

// let user = User.getShredUser()
// user.setAge(28)


// let user = new User();




class Item {
  name: string;
  price: number;
  constructor(name: string, price: number){
    this.name = name
    this.price = price;
  }
}

// let user = new User()
// user.addItem(new Item("loundry", 50))
// user.addItem(new Item("shoko", 5))
 
// user = new User();
// const user1 = new User('idan')
// const user2 = new User('idan', 18)
// const user3 = new User('idan', 18, 1000)























// class User {
//  private constructor(age, name) {
//     this.name = name;
//     this.age = age;
//   }
//   name = "idan";
//   age = 18;
//   user = new User(20, "idan");
// }
// user.name

// const user = new User();
// user.age;
