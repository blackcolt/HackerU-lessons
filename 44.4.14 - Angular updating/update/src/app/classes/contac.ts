export class Contact {
  id: string = '';
  name: string = '';
  number: string = '';
  constructor(name: string, number: string, id?: string) {
    this.name = name;
    this.number = number;
    this.id = id ?? '';
  }
}
