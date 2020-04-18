'use strict'

const weatherController = (function(){
    let fetchIP = () => fetch('https://api.ipify.org?format=json')
            .then(response => {
            if(response.ok) return response.json();
            throw Error('Error while fetching'  + response.statusText);
            })
            .then(data => data.ip)
            .catch(err => console.log(err));

    let fetchWeather = query => fetch(`http://api.weatherstack.com/current?access_key=0114deb051abfe57324a33b1cf11b6b5&query=${query}`)
            .then(response => response.json())
            .catch(err => console.log(err));

    let fetchBackground = query => fetch(`https://pixabay.com/api/?key=9603142-d66551022b569be6f23252593&q=${query} sky&category=nature`)
        .then(data => data.json())
        .then(res => console.log(res));

    return{
        

        globalFetch: (input) => {
            if(input == ''){
                return fetchIP().then(fetchWeather)
            }else{
                return fetchWeather(input);
            }
        },

        backgroundFatch: (inpur) => {
            fetchBackground(input)
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

    }

    const toggleOverlay = function(){
        nodeList.overlay.classList.toggle('visible');
    };
    

    return {

        updateInterface: function(data){
            toggleOverlay();
            weatherController.globalFetch(data).then(data => {
                let location = data.location;
                let currentWeather = data.current;


            let markup = `<div class="infoblock">
            <p class="country">${location.name}, ${location.country}</p>
            <p class="time">Local Time:${currentWeather.observation_time}</p>
            <img src=${currentWeather.weather_icons[0]} alt="Weather icon" height="42" width="42">
            <p class="temperature">Local Temperature: ${currentWeather.temperature}</p>

         <ul>
            <li class="feelslike">Feels Like: ${currentWeather.feelslike}</li>
            <li class="humidity">Humidity: ${currentWeather.humidity}</li>
            <li class="uv-index">UV Index: ${currentWeather.uv_index}</li>
        </ul>
        </div>`
        
        nodeList.outputBlock.innerHTML = markup;
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
        if(input !== '' && !isNaN(input)) return;
        uiCtrl.updateInterface(input);
        myNodes.searchInput.value = '';

    }

    return {
        init: function(){
            // wetherCtrl.fetchWeather('Egipt')
        }
    }
})(weatherController, UIcontroller)



appController.init();









