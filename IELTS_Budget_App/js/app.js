'use strict';
///////////////////////////// Budget controller ///////////////////////////
const budgetController = (function(){
const Scores = function(lis, read, writ, speak){
    this.listening = lis;
    this.reading = read;
    this.writing = writ;
    this.speaking = speak;
};

const Hours= function(lis, read, writ, speak){
    this.listening = lis;
    this.reading = read;
    this.writing = writ;
    this.speaking = speak;
};

let data = {
    userData:{
        scores: 0,
        hours: 0,
    },
    daysRemained: {
        speaking: null,
        listening: null,
        reading: null,
        writing: null,
    },
    resultRate: 0.00 +' ' + 'UAH',
    levels: [720, 820, 920, 1020],
};
  
    const calculateDays = function(userLevel, hoursPerDay){
        let levels = data.levels;
        console.log(userLevel);
        console.log(hoursPerDay);
        function calcRemainedDays(moduleScore, moduleHrs){
            return levels.reduce((acc, el) => {
                if(el > moduleScore && moduleScore !== 0){
                return acc.concat(Math.round(((el - moduleScore)/4) / moduleHrs))
                }else if(el <= moduleScore || moduleScore === 0){
                return acc.concat('______');
                }
            },[]
            ); 
        }
        data.daysRemained.speaking = calcRemainedDays(userLevel.speaking, hoursPerDay.speaking);
        data.daysRemained.listening = calcRemainedDays(userLevel.listening, hoursPerDay.listening);
        data.daysRemained.reading = calcRemainedDays(userLevel.reading, hoursPerDay.reading);
        data.daysRemained.writing = calcRemainedDays(userLevel.writing, hoursPerDay.writing);
    }

return{
    resetDatabase: function(){
        data = {
            userData:{
                scores: 0,
                hours: 0,
            },
            daysRemained: {
                speaking: 0,
                listening: 0,
                reading: 0,
                writing: 0,
            },
            resultRate: 0.00 + ' '+'UAH',
            levels: [720, 820, 920, 1020],
        };
    },
    addUserInfo: function(scores, hours){
        let convertedScores = [];
        scores.map(function(el){
            switch(el){
                case 4:
                convertedScores.push(520);
                break;
                case 4.5:
                convertedScores.push(560);
                break;
                case 5:
                convertedScores.push(590);
                break;
                case 5.5:
                convertedScores.push(620);
                break;
                case 6:
                convertedScores.push(720);
                break;
                case 6.5:
                convertedScores.push(820);
                break;
                case 7:
                convertedScores.push(920);
                break;
                case 7.5:
                convertedScores.push(1020);
                break;
                default:
                convertedScores.push(0)
            }
        })
            data.userData.scores = new Scores(...convertedScores);
            data.userData.hours = new Hours(...hours);
        },

    addRate: function(selectedScr, input){
        let userScoresForClass, generalLevels;
        if(data.userData.scores.writing !== 0 && data.userData.scores.speaking !== 0){
            userScoresForClass = (data.userData.scores.writing + data.userData.scores.speaking)/2;
        }else if(data.userData.scores.writing === 0 || data.userData.scores.speaking === 0 || data.userData.scores.writing === 0 && data.userData.scores.speaking === 0){
            userScoresForClass = data.userData.scores.writing + data.userData.scores.speaking;
        }
        
        generalLevels = data.levels;

        function calculateHourlyRate(indx){
            if(generalLevels[indx] >= userScoresForClass && userScoresForClass !== 0){
                
                let number = input * ((generalLevels[indx] - userScoresForClass)/4);

                const formatNumber = function(num){
                    let numSplit, int, dec;
                    num = Math.abs(num);
                    num = num.toFixed(2);
                    numSplit = num.split('.');
            
                    int = numSplit[0];
            
                    if(int.length > 3){ 
                        int = int.substr(0,int.length - 3) + ',' + int.substr(int.length-3, 3);
                    }
            
                    dec = numSplit[1];
                    return int + '.' + dec;
               };
               data.resultRate = formatNumber(number) + ' ' + 'UAH';





            }else if(generalLevels[indx] < userScoresForClass || userScoresForClass == 0){
                data.resultRate = '0.00' + ' ' + 'UAH';
            }
        };

        if(selectedScr === 6){
            calculateHourlyRate(0)
        }else if(selectedScr === 6.5){
            calculateHourlyRate(1)
        }else if(selectedScr === 7){
            calculateHourlyRate(2)
        }else if(selectedScr === 7.5){
            calculateHourlyRate(3)
        }
    },

    calculateRemainedDays: function(){
        calculateDays(data.userData.scores, data.userData.hours)
    },
    getData: function(){
        return {
            days: {
                speaking: data.daysRemained.speaking,
                listening: data.daysRemained.listening,
                reading: data.daysRemained.reading,
                writing: data.daysRemained.writing,
            },
            scores: data.userData.scores,
            rate: data.resultRate,
        }
    },

        testing: function(){
            console.log(data)
        }

};  

})();
//////////////////////////// UI controller /////////////////////////////////
const UIcontroller = (function(){
    const DOMstrings = {
        firstTable: document.querySelector('.scores'),
        secondTable: document.querySelector('.hours'),
        thirdTable: document.querySelector('.result'),
        forthTable: document.querySelector('.cost'),

        currentScores: '.curScore',
        intendedHrs: '.intHrs',
        inputRate: '.rateInp',

        outputListen: document.querySelector('.listenOutput'),
        outputRead: document.querySelector('.readOutput'),
        outputWrite: document.querySelector('.writeOutput'),
        outputSpeak: document.querySelector('.speakOutput'),
        outputRate: '.rateOutp',

        submitLevelBtn: '.selectLevelBtns',
        submitBtn: '#submitBtn',
        submitSixBtn: '.submitSix',
        submitSixFiveBtn: '.submitSixFive',
        submitSevenBtn: '.submitSeven',
        initiationBtn: '.initCalc',
        checkLinkBtn: '.link',
    };
    return{
        displayCost: function(data){
            let costDom = DOMstrings.forthTable.querySelector(DOMstrings.outputRate);
            costDom.textContent = data.rate;

        },
        displayResaultData: function(data){
            let listenDom = Array.from(DOMstrings.outputListen.querySelectorAll('td'));
            let speakDom = Array.from(DOMstrings.outputSpeak.querySelectorAll('td'));
            let writeDom = Array.from(DOMstrings.outputWrite.querySelectorAll('td'));
            let readDom = Array.from(DOMstrings.outputRead.querySelectorAll('td'));

            function showInfo(arr, module){
                for(let i = 0; i < arr.length; i++){
                    arr[i].textContent =  module[i] + (module[i] > 1? ' ' + 'days': '');
                };
            }
            showInfo(listenDom, data.days.listening);
            showInfo(speakDom, data.days.speaking);
            showInfo(writeDom, data.days.writing);
            showInfo(readDom, data.days.reading);
        },
        displayCreditsData: function(data){
            let creditDom = Array.from(DOMstrings.thirdTable.querySelectorAll(
                '.listenOutput' + ', ' + 
                '.readOutput' + ', ' +
                '.writeOutput' + ', ' +
                '.speakOutput'
                )).map(el => el.firstElementChild);
                let arrCredits = [data.scores.listening, data.scores.reading, data.scores.writing, data.scores.speaking].map(el => Math.round((el/4)*2)/2);


                function showInfo(arr, credits){
                    for(let i = 0; i < arr.length; i++){
                        arr[i].textContent =  credits[i] + (credits[i] > 1? ' ' + 'hours':' ' + 'hour');
                    };
                }

                showInfo(creditDom, arrCredits);

        },

        getInputs: function(){
            return{
                currentScr: Array.from(DOMstrings.firstTable.querySelectorAll(DOMstrings.currentScores)).map(el => Math.round(el.value * 2)/2),
                hoursInvest: Array.from(DOMstrings.secondTable.querySelectorAll(DOMstrings.intendedHrs)).map(el => Math.round(el.value * 2)/2),
                inputRt: DOMstrings.forthTable.querySelector(DOMstrings.inputRate).value,
            }
        },
        
        clearFields: function(){
            let scoresFields, hoursFields ;
            scoresFields = Array.from(document.querySelectorAll(DOMstrings.currentScores));
            hoursFields = Array.from(document.querySelectorAll(DOMstrings.intendedHrs));
            scoresFields.forEach(el => el.value = '');
            hoursFields.forEach(el => el.value = '');

            scoresFields[0].focus();
        },
        clearRateField: function(){
        DOMstrings.forthTable.querySelector(DOMstrings.inputRate).value = '';

        },
        getDomStrings: function(){
            return DOMstrings;
        }
    }

})();
//////////////////////////// App controller ////////////////////////////////
const appController = (function(budgetCtrl, UIctrl){
    const setupEventListeners = function(){
        let DOM = UIctrl.getDomStrings();
        document.querySelector(DOM.submitBtn).addEventListener('click', addCurrentScores);
        document.addEventListener('keypress', (e)=>{
            if(e.keyCode !== 13 || e.which !== 13) return;
            addCurrentScores();
        })
        DOM.forthTable.querySelector(DOM.submitLevelBtn).addEventListener('click', calcRate)
        document.querySelector(DOM.initiationBtn).addEventListener('click', resetCalcuator);
        

    }
    const resetCalcuator = function(e){
        if(e.target.nodeName !== 'DIV')return;
        UIctrl.clearFields();
        UIctrl.clearRateField();
        let resetData = {
            days: {
                speaking: ['______', '______', '______', '______',],
                listening: ['______', '______', '______', '______',],
                reading: ['______', '______', '______', '______',],
                writing: ['______', '______', '______', '______',],
            },
            scores: {
                listening:0,
                reading:0,
                writing:0,
                speaking:0,
            },
            rate: '0.00' + ' ' + 'UAH',
        }
        UIctrl.displayCost(resetData);
        UIctrl.displayCreditsData(resetData);
        UIctrl.displayResaultData(resetData);
        budgetCtrl.addRate('0.00', '0.00');
        budgetCtrl.resetDatabase();
        


    }
    const calcRate = function(e){
        let input, selectedScore;
        input = UIctrl.getInputs();
        if(e.target.nodeName !== 'DIV')return;
        selectedScore = Number(e.target.textContent);
        
        if(input.inputRt !== '' && !isNaN(input.inputRt) && input.inputRt > 0){
        budgetCtrl.addRate(selectedScore, input.inputRt);
        console.log(budgetCtrl.getData())
        UIctrl.displayCost(budgetCtrl.getData());

        }

        
    }
    const addCurrentScores = function(){
        let input;
        input = UIctrl.getInputs();
        console.log(input.currentScr);
        console.log(input.hoursInvest);


        if(input.currentScr.every(el => el !== '' && !isNaN(el) && el > 0)&&
           input.hoursInvest.every(el => el !== '' && !isNaN(el) && el > 0)
        ){
            console.log('it works')
            // UIctrl.clearFields();
            budgetCtrl.addUserInfo(input.currentScr, input.hoursInvest);
            budgetCtrl.calculateRemainedDays();
            UIctrl.displayResaultData(budgetCtrl.getData());
            UIctrl.displayCreditsData(budgetCtrl.getData());
            

            
        }else{
            UIctrl.clearFields();
            alert('Please fill-up all fields');
            
        }
    }

    return{
        init: function(){
            setupEventListeners();
        }
    }
})(budgetController,UIcontroller);

appController.init();
