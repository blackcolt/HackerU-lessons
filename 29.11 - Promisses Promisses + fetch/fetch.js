const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=eb98981901058b162b2802e1ddd392b9'
fetch(url)
.then(response=>{
    return response.text()
})
.then((data)=>{
    $('#iframe').html(data)
})
.catch((error)=>{
    console.error(error);
})




