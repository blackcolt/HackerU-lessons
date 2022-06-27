export class Contact {
  name: string;
  phone: string;
  constructor(name?: string, phone?: string) {
    this.name = name || '';
    this.phone = phone || '';
  }
  // setName(name: string) {
  //   if (name.length > 1) {
  //     this.name = name;
  //   }
  // }
  // setPhone(phone: string) {
  //   if (phone.length === 9) {
  //     this.phone = phone;
  //   }
  // }

  // getName() {
  //   return this.name;
  // }
  // getPhone() {
  //   return this.phone;
  // }
}
