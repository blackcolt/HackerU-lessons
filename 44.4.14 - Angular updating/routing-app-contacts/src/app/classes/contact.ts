export class Contact {
  id: string = '';
  name: string = '';
  phone: string = '';
  nickname: string = '';
  isLikeCold: boolean = false;
  dateOfBirth: Date = new Date();

  constructor(
    id: string,
    name: string,
    phone: string,
    isLikeCold: boolean,
    dateOfBirth: Date
  ) {
    this.id = id;
    this.setName(name);
    this.setDateOfBirth(dateOfBirth);
    this.isLikeCold = isLikeCold;
    this.setPhone(phone);
  }
  setName(name: string) {
    if (name.length > 1) {
      this.name = name;
    }
  }
  setPhone(phone: string) {
    this.phone = phone;
  }
  setDateOfBirth(date: Date) {
    if (date < new Date()) {
      this.dateOfBirth = date;
    }
  }
}
