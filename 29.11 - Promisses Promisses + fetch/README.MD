 - fetch api.
 - Cors.
 - Promise resolve reject catch.
 - async await.



const url = "https:111//api.openweathermap.org/data/2.5/weather?q=London&appid=eb98981901058b162b2802e1ddd392b9";
fetch(url).then(response=>{
    console.log(response);
}).catch(error=>{
    console.log(error);
});