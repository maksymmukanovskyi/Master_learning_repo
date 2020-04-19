'use strict'

const weatherController = (function(){
    let fetchIP = () => fetch('https://api.ipify.org?format=json')
            .then(response => {
            if(response.ok) return response.json();
            throw Error('Error while fetching'  + response.statusText);
            })
            .then(data => data.ip)
            .catch(err => console.log(err));

    let fetchWeather = query => fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=a3a4052d61ef5ecda40143bec7a6b7b6&units=metric`)
            .then(data => data.json())
            .catch(err => console.log(err));

    let findCityTime = ip => fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=574e0feb69a547daab56c0922bde0d16&ip=${ip}`)
            .then(data => data.json())


    let fetchBackground = query => fetch(`https://pixabay.com/api/?key=9603142-d66551022b569be6f23252593&q=${query} sky&category=nature`)
        .then(data => data.json())

    return{

        globalFetch: (input) => {
            if(input == null){
                return  fetchIP().then(findCityTime).then(data => fetchWeather(data.city));

            }else{
                return fetchWeather(input);
            }
        },

        backgroundFetch: (input) => {
            let time;
            if(input >= 0 && input < 6 || input >= 21 && input <= 24){
                time = "night sky";
            }else if(input >= 6 && input < 9){
                time = 'morning sky';
            }else if(input >= 9 && input < 18){
                time = 'day sky';
            }else if(input >= 18 && input <= 20){
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

    }

    const toggleOverlay = function(){
        nodeList.overlay.classList.toggle('visible');
    };
    

    return {

        updateInterface: function(data){
            toggleOverlay();
            weatherController.globalFetch(data).then(data => {
                
                // let location = data.location;
                // let currentWeather = data.current;
                // let localHour = Number(location.localtime.split(' ')[1].split(':')[0])
                console.log(data)


        //     weatherController.backgroundFetch(localHour).then(data => {
        //         let numb = Math.round(Math.random() * 10);
        //         nodeList.background.setAttribute("style", ` width: 100%;
        //         height: 100%;
        //         background-color:  rgba(15, 15, 15, 0.294);;
        //         background: url('') ; 
        //          background: linear-gradient( rgba(0, 0, 0, 0.041), rgba(255, 255, 255, 0.048) ), url(${data.hits[numb].largeImageURL}) no-repeat center center fixed;
        //       -webkit-background-size: cover; 
        //       -moz-background-size: cover;
        //       -o-background-size: cover;
        //       background-size: cover;` )
        //     })

        //     let markup = `<div class="infoblock">
        //     <p class="country">${location.name}, ${location.country}</p>
        //     <p class="time">Local Time: ${location.localtime.split(' ')[1]}</p>
        //     <img src=${currentWeather.weather_icons[0]} alt="Weather icon" height="42" width="42">
        //     <p class="temperature">Local Temperature: ${currentWeather.temperature}</p>

        //  <ul>
        //     <li class="feelslike">Feels Like: ${currentWeather.feelslike}</li>
        //     <li class="humidity">Humidity: ${currentWeather.humidity}</li>
        //     <li class="uv-index">UV Index: ${currentWeather.uv_index}</li>
        // </ul>
        // </div>`
        
        // nodeList.outputBlock.innerHTML = markup;
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








    





