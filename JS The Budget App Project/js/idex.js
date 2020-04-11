'use strict';
/////////////////////////////////////BUDGET CONTROLLER////////////////////////////////
const budgetController = (function(){
    const Expense = function(id, description,value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.persentage = -1;
    };
    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.persentage = Math.round((this.value / totalIncome) * 100);
        }else{
            this.persentage = -1;
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.persentage;
    };

    const Income = function(id, description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    const calculateTotal = function(type){
        let sum = 0;
        data.allItems[type].forEach(function(el){
            sum += el.value;
        })
        data.totals[type] = sum;
    }

    const data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        persentage: -1,
    }

    return{
        addItem: function(type, des, val){
            let newItem, ID;
            // create new id
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            }else{
                ID = 0;
            }
            
            // create new item based on inc or exp type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            // push items to data structure
            data.allItems[type].push(newItem);
            // return new element
            return newItem;
        },
        deleteItem: function(type, id){
            let ids, index;
            ids = data.allItems[type].map(function(current){
                return current.id
            });
            index = ids.indexOf(id);
            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }

        },
        calculateBudget: function(){
            //calculate  total income and expenses
            calculateTotal('inc');
            ('exp');

            //calculate the budget : income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            //calculate persentage of income that  we spent
            if(data.totals.inc > 0){
                data.persentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.persentage = -1;
            }
            


        },
        calculatePercentages: function(){
            data.allItems.exp.forEach(function(el){
                el.calcPercentage(data.totals.inc);
            })
        },

        getPercentages: function(){
            let allPerc = data.allItems.exp.map(function(el){
                return el.getPercentage();
            })
            return allPerc; 
        },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                persentage: data.persentage,
            }
        },
        testing: function(){
            console.log(data)
        }
    }   
})();


// //////////////////////////////UI CONTROLLER//////////////////////////////
const UIController = (function(){
    const DOMstrings = {
        inputType: '.add__type',
        inputDescription : '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        persemtageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month',
    }

    const formatNumber = function(num, type){
        let numSplit, int, dec;
        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split('.');

        int = numSplit[0];

        if(int.length > 3){ 
            int = int.substr(0,int.length - 3) + ',' + int.substr(int.length-3, 3);
        }

        dec = numSplit[1];
        return (type === 'exp'? '-' : '+') + ' ' + int + '.' + dec;
   };


   let nodelistForEach = function(list, callback){
    for(let i = 0; i < list.length; i++){
        callback(list[i], i);
    }
    };



    return{
        getInputs: function(){
            return{
            type : document.querySelector(DOMstrings.inputType).value,
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : parseFloat(document.querySelector(DOMstrings.inputValue).value),
            }
    },
        addListItem: function(obj, type){
            let html, newHtml, element;
            //add HTML string with placeholder text
            if(type === 'inc'){
            element = DOMstrings.incomeContainer;
            html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }else if(type === 'exp'){
            element = DOMstrings.expensesContainer;
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            
            //replace placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            //insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },
        deleteListItem: function(selectorId){
            let el = document.getElementById(selectorId);
            el.parentNode.removeChild(el);
        },
        clearFields: function(){
            let fields, fielsdArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            fielsdArr = Array.prototype.slice.call(fields);
            fielsdArr.forEach(el => el.value = '');
            fielsdArr[0].focus();
            
        },
        displayBudget: function(obj){
            let type;
            obj.budget > 0 ? type = 'inc': type = 'exp';
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp'); 
            if(obj.persentage > 0){
                document.querySelector(DOMstrings.persemtageLabel).textContent = obj.persentage + '%';
            }else{
                document.querySelector(DOMstrings.persemtageLabel).textContent = '---';
            }

        },
        displayPercentages: function(percentages){
            let fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

            
            nodelistForEach(fields, function(cur, index){
                if(percentages[index] > 0){  
                    cur.textContent = percentages[index] + '%';
                }else{
                    cur.textContent = '---';
                }
                
            })
        }, 
        displayMonth: function(){
            let now, months, month, year;
            now = new Date();
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

        },
        changedType: function(){
            let fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue
            )

            nodelistForEach(fields, function(current){
                current.classList.toggle('red-focus'); 
            })
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        },
        

        getDOMstrings(){
            return DOMstrings;
    }
}})();


////////////////////////////////// APP CONTROLLER////////////////////////////////
const appController = (function(budgetCtrl, UICtrl){
    const setupEventListeners = function(){
        let DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(e){
            if(e.keyCode !== 13 || e.which !== 13)return;
            ctrlAddItem()
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    }

    const updateBudget = function(){
        //calculate the budget
        budgetCtrl.calculateBudget();
        //return the budget
        let budget = budgetCtrl.getBudget();
        //display the budget on the UI
        UICtrl.displayBudget(budget)
        console.log(budget);
    }

    const updatePercentages = function(){
        // calculte percentages
        budgetCtrl.calculatePercentages();
        //read percentages from the budget controller
        let percentages = budgetCtrl.getPercentages();
        //update the UI wit thw new percentages
        UICtrl.displayPercentages(percentages);
        console.log(percentages)

    }
    
    const ctrlAddItem = function(){
        let input, newItem;
        //1. get field input data
        input = UICtrl.getInputs();

        if(input.value !== '' && !isNaN(input.value) && input.value > 0){

            //2 add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        //add item to the UI
        UICtrl.addListItem(newItem, input.type); 
        //clear the fields
        UICtrl.clearFields();
        //calculate and update budget
        updateBudget();
        //calculate and update percentages
        updatePercentages();

        }
    }
    const ctrlDeleteItem = function(e){
        let itemID, splitedID,type,ID;
        itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;
        splitedID = itemID.split('-');
        type = splitedID[0];
        ID = parseInt(splitedID[1]);
        //delete the item from data structure
        budgetCtrl.deleteItem(type, ID);
        //delete the item from the UI
        UICtrl.deleteListItem(itemID);
        //update and show the new budget
        updateBudget();
        console.log(splitedID);
        //calculate and update percentages
        updatePercentages();
    }

    return{
        init: function(){
            console.log('app is starting');
            UICtrl.displayMonth(); 
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                persentage: -1,
            });
            setupEventListeners();
            
        }
    }
})(budgetController, UIController);

appController.init();