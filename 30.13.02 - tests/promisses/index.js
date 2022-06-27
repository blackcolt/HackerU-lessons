function getAllFromDriverFromGett() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ driver: "loser moty", company: "yandx" });
    }, 4000);
  });
}

function getAllFromDriverFromYango() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ driver: "moty", company: "yandx" });
    }, 2000);
  });
}

const race = [getAllFromDriverFromYango(), getAllFromDriverFromGett()];
// Promise.race(race).then((winnerDriver) => console.log(winnerDriver));
Promise.all(race).then((drivers) => console.log(drivers));
