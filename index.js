 
const apiKey = '8d6454a89dff871786a0307b0dbebbee';
 
let image =document.querySelector('.image-icons img')

async function getdata(city){
    let res =await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
    let data =await res.json();
    console.log(data)

    document.querySelector('.city h1').innerHTML=data.name;
    document.querySelector('.temp h1').innerHTML=  `<h1>${Math.round(data.main.temp)}<sup>o</sup> C</h1>`
    document.querySelector('.per').innerHTML=`<p>${data.main.humidity}%`;
    document.querySelector('.speed').innerHTML=`<p>${data.wind.speed} km/h</p>`

    if(data.weather[0].main=='Haze'){
     image.src='./images/haze.png'
    }else if(data.weather[0].main=='Clouds'){
        image.src='./images/clouds.png'
    }else if(data.weather[0].main=='Drizzle'){
        image.src='./images/drizzle.png'
    }else if(data.weather[0].main=='Rain'){
        image.src='./images/rain.png'
    }else if(data.weather[0].main=='Snow'){
        image.src='./images/snow.png'
    }else if(data.weather[0].main=='Clear'){
        image.src='./images/clear.png'
    }else if(data.weather[0].main=='Thunderstorm'){
        image.src='./images/thiunder1.png'
    }

}
 

let input =document.querySelector('.search-box input');
let btn =document.querySelector('.search-box button')
btn.addEventListener('click',(e)=>{
e.preventDefault()
    getdata(input.value)
})


