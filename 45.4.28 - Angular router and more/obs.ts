sharedInstence.numberOFkids = 5;

let kidsChange = new rxjs.Observable((sub) => {
  let counter = 0;
  setInterval(() => {
    counter++;
    if (counter > 5) {
      sub.next(counter);
    }
  }, 2000);
});

function idan(counter);

x.unsubscribe(idan);
