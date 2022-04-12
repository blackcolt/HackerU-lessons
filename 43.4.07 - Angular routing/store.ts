// - Clients
// - Intrested (מתעניין)

enum PaymentMetod {
  CredidCard,
  Cash,
  Paypal,
  ApplePay,
}

enum Ranks {
  private,
  corplel,
  sergent,
}

abstract class Person {
  name: string;
}
class Seller extends Person {}
class Suplier extends Person {}
class Intrested extends Person {}
class Client extends Intrested {
  paymentMetod: PaymentMetod;
  constructor(name: string, paymentMetod: PaymentMetod) {
    super();
    this.name = name;
    this.paymentMetod = paymentMetod;
  }
}

let bnadam = new Client("idan", PaymentMetod.ApplePay);
