const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.floor(Math.random() * 10) % 2 == 0 ? reject('foo') : resolve('foo') 
    }, 300);
  });


  myPromise
  .then((data)=>{
      console.log(data)
  }, (data)=>{
    console.log('error'+ data);
  })