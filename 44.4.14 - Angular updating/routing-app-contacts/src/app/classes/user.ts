class User {
  id?: number;
  name?: String;
  private static nextUserId = 1;
  constructor(name: string) {
    this.name = name;
    this.id = User.nextUserId;
    User.nextUserId++;
  }
}

let us = new User('IDAN');
console.log(us.id);
let us2 = new User('IDAN');
console.log(us.id);
