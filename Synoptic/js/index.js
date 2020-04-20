'use strict'

const weatherController = (function(){
    let fetchIP = () => fetch('https://api.ipify.org?format=json')
            .then(response => {
            if(response.ok) return response.json();
            throw Error('Error while fetching'  + response.statusText);
            })
            .then(data => data.ip)
            .catch(err => console.log(err));

    let fetchWeather = query => fetch(`http://api.weatherapi.com/v1/forecast.json?key=327adeb113914bb082455318202004&q=${query}&days=7`)
            .then(data => data.json())
            .catch(err => console.log(err));

    let fetchBackground = query => fetch(`https://pixabay.com/api/?key=9603142-d66551022b569be6f23252593&q=${query} sky&category=nature`)
        .then(data => data.json())

    return{

        globalFetch: (input) => {
            if(input == null){
                return  fetchIP().then(fetchWeather);

            }else{
                return fetchWeather(input);
            }
        },

        backgroundFetch: (input) => {
            let time;
            if(input >= 0 && input < 6 || input >= 20 && input <= 24){
                time = "night sky";
            }else if(input >= 6 && input < 9){
                time = 'morning sky';
            }else if(input >= 9 && input < 18){
                time = 'day sky';
            }else if(input >= 18 && input <= 19){
                time = 'evening sky';
            }
            return fetchBackground(time)
        }


    }
        


})()
/////////////////////////////////////////////////////////////

const UIcontroller = (function(){
    const nodeList = {
        searchForm: document.querySelector('.searchContainer'),
        searchInput: document.querySelector('.searchBox'),
        outputBlock: document.querySelector('.output'),
        list: document.querySelector('.main-list'),
        background: document.querySelector('.background'),
        overlay: document.querySelector('.overlay'),
        sevenDaysForcast: document.querySelector('.main-list')

    }

    const toggleOverlay = function(){
        nodeList.overlay.classList.toggle('visible');
    };
    const createMainBlock = function({name, country, localtime}, {condition, temp_c, feelslike_c, humidity, uv}){
            let markup = `<div class="infoblock">
            <p class="country"><b>${name}, ${country}</b></p>
            <p class="time">Local Time:<b> ${localtime.split(' ')[1]}</b></p>
           
            <p class="temperature">Local Temperature:<b> ${temp_c}</b></p>

         <ul>
            <li class="feelslike">Feels Like:<b> ${feelslike_c}</b></li>
            <li class="humidity">Humidity:<b> ${humidity}</b></li>
            <li class="uv-index">UV Index:<b> ${uv}</b></li>
            <span> <img src=http://${condition.icon} alt="Weather icon" height="60" width="60"></span>
        </ul>
        </div>`
        
        nodeList.outputBlock.innerHTML = markup;
    };

    const createSevenDaysBlocks = function({forecastday}){
        
        let markup = forecastday.reduce((acc, el) => {
        let localeUs = new Date(el.date).toLocaleString('en-US', {weekday: 'long'})
       return  acc + `<li><div class="infoblock">
        <p class="date"><b> ${localeUs}</b></p>
        <p class="min">min temp:<b> ${el.day.mintemp_c}</b></p>
        <p class="max">max temp:<b> ${el.day.maxtemp_c}</b></p>
        <p class="condition">condition:<b> ${el.day.condition.text}</b></p>
        <img src=http://${el.day.condition.icon} alt="Weather icon" height="30" width="30">
    </div></li>`
        },'')

         
        
    nodeList.sevenDaysForcast.innerHTML = markup;
    }   
    
    const createBackground = function(hr){
             weatherController.backgroundFetch(hr).then(data => {
                let numb = Math.round(Math.random() * 10);
                nodeList.background.setAttribute("style", ` width: 100%;
                height: 100%;
                background-color:  rgba(15, 15, 15, 0.294);;
                background: url('') ; 
                 background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.5) ), url(${data.hits[numb].largeImageURL}) no-repeat center center fixed;
              -webkit-background-size: cover; 
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;` )
            })
    }

    return {

        updateInterface: function(data){
            toggleOverlay();
            weatherController.globalFetch(data).then(data => {
                
                let location = data.location;
                let currentWeather = data.current;
                let forecast = data.forecast;
                let localHour = Number(location.localtime.split(' ')[1].split(':')[0])
                console.log(data)
                createBackground(localHour);
                createMainBlock(location, currentWeather);
                createSevenDaysBlocks(forecast);
            toggleOverlay();
            })
            
        },
        getDomList: function(){
            return nodeList;
        },
        

    }

})()


///////////////////////////////////////////////////////////////////////
const appController = (function(wetherCtrl, uiCtrl){
    let myNodes = uiCtrl.getDomList();
    myNodes.searchForm.addEventListener('click', (e) =>{
        if(e.target.nodeName !== 'I')return;
        findCity();
    });

    document.addEventListener('keypress', (e) =>{
        if(e.keyCode !== 13)return;
        findCity();
    })
    function findCity(){
    let input = myNodes.searchInput.value;
        if(input == '' && !isNaN(input)) return;
        uiCtrl.updateInterface(input);
        myNodes.searchInput.value = '';
    }

    return {
        init: function(){
            uiCtrl.updateInterface();
        }
    }
})(weatherController, UIcontroller)



appController.init();








    





