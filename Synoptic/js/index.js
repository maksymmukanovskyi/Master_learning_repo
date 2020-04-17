'use strict'

const weatherController = (function(){

    return{
        fetchIP: () => fetch('https://api.ipify.org?format=json')
            .then(response => {
            if(response.ok) return response.json();
            throw Error('Error while fetching'  + response.statusText);
            })
            .then(data => data.ip)
            .catch(err => console.log(err)),

        fetchWeather: query => fetch(`http://api.weatherstack.com/current?access_key=0114deb051abfe57324a33b1cf11b6b5&query=${query}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err)),

        fetchBackground: query => fetch(`https://pixabay.com/api/?key=9603142-d66551022b569be6f23252593&q=${query} sky&category=nature`)
        .then(data => data.json())
        .then(res => console.log(res)),
    }


})()

const UIcontroller = (function(){
    const nodeList = {
        //some code
    }
    return {
        getDomList(){
            return nodeList;
        }
    }

})()

const appController = (function(wetherCtrl, uiCtrl){
    return {
        init: function(){
            wetherCtrl.fetchWeather('Egipt')
        }
    }
})(weatherController, UIcontroller)

appController.init();









