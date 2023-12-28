import "./assets/css/style.css";
import apidata from "./modules/apidata";
import elemcreater from "./modules/elementcreater";
import bgimg from "./assets/images/bg.jpg";
const successCallback = () => {
    setwheratherinfoData(Intl.DateTimeFormat().resolvedOptions().timeZone)

};
const setwheratherinfoData = async (location) => {
    let wheatherData = await apidata(location)
    document.getElementById('currentconditionsinfo').textContent = wheatherData.current.condition.text
    document.getElementById('currenttempurature').textContent = wheatherData.current.temp_c + ` \u00B0 c `
    document.getElementById('weatherInfo-icon').src = wheatherData.current.condition.icon
    document.getElementById('location').textContent = location
    document.getElementById('feels-like').textContent = wheatherData.current.feelslike_c + ` \u00B0 c `
    document.getElementById('humidity').textContent = wheatherData.current.humidity + 'g.m-3,'
    document.getElementById('wind_kph').textContent = wheatherData.current.wind_kph + 'kph'
    document.getElementById('chance_of_rain').textContent += wheatherData.forecast.forecastday[0].day.daily_chance_of_rain + '%'
    for (let i = 0; i < 24; i++) {
        let j = i + Number((new Date).toString().split(" ")[4].split(':')[0]) + 1
        let day1 = wheatherData.forecast.forecastday[0].hour
        let day2 = wheatherData.forecast.forecastday[1].hour
        if (day1[j] !== undefined) {
            document.getElementById(`time${i}`).textContent = j > 12 ? `${j - 12} pm` : `${j} am`
            document.getElementById(`temp${i}`).textContent = `${day1[j].temp_c}  \u00B0 c`
            document.getElementById(`weatherInfo-icon_hour${i}`).src = day1[j].condition.icon
        } else {
            document.getElementById(`time${i}`).textContent = j - 24 > 12 ? `${j - 24 - 12} pm` : `${j - 24} am`
            document.getElementById(`temp${i}`).textContent = `${day2[j - 24].temp_c}  \u00B0 c`
            document.getElementById(`weatherInfo-icon_hour${i}`).src = day2[j - 24].condition.icon

        }

    }
    wheatherData.forecast.forecastday.forEach((element,i) => {
        if(compare(element.date)){
            document.getElementById(`weekday${i-1}`).textContent=(new Date(element.date)).toString().split(" ")[0]
            document.getElementById(`weekdaytemp${i-1}`).textContent=`${element.day.avgtemp_c} \u00B0 c`
            document.getElementById(`weatherInfo-icon_week${i-1}`).src =element.day.condition.icon

        }
    });
    
}

const compare=(date)=>{
    const datetoday=(new Date).toISOString().split("T")[0]
    if (date.split('-')[0]>datetoday.split('-')[0]) {
        return true;
    } 
    if (date.split('-')[1]>datetoday.split('-')[1]) {
        return true;   
    }
    if (date.split('-')[2]>datetoday.split('-')[2]) {
        return true;
    } 
    return false
}

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

document.body.style.backgroundImage = `url("${bgimg}")`;
// creating top div 
elemcreater({ prop: 'div#top', parentId: 'content' });
//creating top-left div
elemcreater({ prop: 'div#top-left', parentId: 'top' })
elemcreater({ prop: 'div#currentconditions', parentId: "top-left" })
//creating the current conditions info p tag
elemcreater({ prop: 'p#currentconditionsinfo', parentId: "currentconditions" })
//adding selected location by user
elemcreater({ prop: 'p#location', parentId: "currentconditions" })
//getting current date and time for user
elemcreater({ prop: 'p#date', parentId: "currentconditions", text: `${(new Date).toString().split(" ")[0]} ${(new Date).toString().split(" ")[1]} ${(new Date).toString().split(" ")[2]} ${(new Date).toString().split(" ")[3]}` })
elemcreater({ prop: 'p#time', parentId: "currentconditions", text: `${(new Date).toString().split(" ")[4]}` })
//setting interval of 1 sec to update current time for the user
setInterval(() => {
    document.getElementById('time').textContent = (new Date).toString().split(" ")[4]
}, 1000)

//creating current tempurature info p tag
elemcreater({ prop: 'p#currenttempurature', parentId: "currentconditions" })
//creating current tempurature info img tag for icons
elemcreater({ prop: 'img#weatherInfo-icon', parentId: "currentconditions" })
//search related tags and stuff
elemcreater({ prop: 'div#searches', parentId: 'currentconditions' })
elemcreater({ prop: 'input#location-search', parentId: "searches" })
elemcreater({ prop: 'button#location-search-btn', parentId: "searches" })

//creating top right div
elemcreater({ prop: `div#top-right`, parentId: 'top' })
//creating feels like div
elemcreater({ prop: 'div#weather-feels-like', parentId: 'top-right' })
elemcreater({ prop: 'p#feels-like_txt', parentId: 'weather-feels-like', text: 'feels like' })
elemcreater({ prop: 'p#feels-like', parentId: 'weather-feels-like' })
//creating humidity div
elemcreater({ prop: 'div#weather-humidity', parentId: 'top-right' })
elemcreater({ prop: 'p#humidity_txt', parentId: 'weather-humidity', text: "humidity" })
elemcreater({ prop: 'p#humidity', parentId: 'weather-humidity' })
//creating wind_kph div
elemcreater({ prop: 'div#weather-wind_kph', parentId: 'top-right' })
elemcreater({ prop: 'p#wind_kph_txt', parentId: 'weather-wind_kph', text: 'wind speed' })
elemcreater({ prop: 'p#wind_kph', parentId: 'weather-wind_kph' })
//creating chance of rain div
elemcreater({ prop: 'div#weather-chance_of_rain', parentId: 'top-right' })
elemcreater({ prop: 'p#chance_of_rain_txt', parentId: 'weather-chance_of_rain', text: 'chance of rain' })
elemcreater({ prop: 'p#chance_of_rain', parentId: 'weather-chance_of_rain' })

//creating bottom div
elemcreater({ prop: 'div#bottom', parentId: 'content' })
//create hours btn and week btn
const hoursbtn=elemcreater({prop:'button#showhoursbtn',parentId:"bottom",text:"hourly"})
const weekssbtn=elemcreater({prop:'button#showweeksbtn',parentId:"bottom",text:'daily'})
hoursbtn.style.border='1px solid white'

weekssbtn.addEventListener('click',()=>{
    weekdiv.style.display='flex'
    hourlydiv.style.display='none'
    hoursbtn.style.border=''
    weekssbtn.style.border='1px solid white'
})
hoursbtn.addEventListener('click',()=>{
    hourlydiv.style.display='flex'
    weekdiv.style.display='none'
    weekssbtn.style.border=''
    hoursbtn.style.border='1px solid white'
})

//hourly weather things
const hourlydiv = elemcreater({ prop: 'div#hourly', parentId: 'bottom' })
for (let i = 0; i <= 24; i++) {
    elemcreater({ prop: `div#hour${i}.hour`, parentId: 'hourly' })
    elemcreater({ prop: `p#time${i}.phtime`, parentId: `hour${i}` })
    elemcreater({ prop: `p#temp${i}.phtemp`, parentId: `hour${i}` })
    elemcreater({ prop: `img#weatherInfo-icon_hour${i}`, parentId: `hour${i}` })

}


//week tweather things
const weekdiv = elemcreater({ prop: 'div#week', parentId: 'bottom' })
for (let i = 0; i <= 7; i++) {
    elemcreater({ prop: `div#week${i}.week`, parentId: 'week' })
    elemcreater({ prop: `p#weekday${i}.pwday`, parentId: `week${i}` })
    elemcreater({ prop: `p#weekdaytemp${i}.pwtemp`, parentId: `week${i}` })
    elemcreater({ prop: `img#weatherInfo-icon_week${i}`, parentId: `week${i}` })
}
weekdiv.style.display = 'none'


//search functions
const searchbtn = document.getElementById('location-search-btn')
const searchtxt= document.getElementById('location-search').value
let searchsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
searchsvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
searchsvg.setAttribute('width', '16');
searchsvg.setAttribute('height', '16');
searchsvg.setAttribute('fill', 'white');
searchsvg.setAttribute('class', 'bi bi-search');
searchsvg.setAttribute('viewBox', '0 0 16 16');
const searchsvgpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
searchsvgpath.setAttribute('d', 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0');
searchsvg.appendChild(searchsvgpath)
searchbtn.appendChild(searchsvg)

searchbtn.addEventListener('click',async()=>{
    setwheratherinfoData(searchtxt)
})