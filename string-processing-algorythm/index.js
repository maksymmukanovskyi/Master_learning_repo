const stringArr = [
    "Pizza Crust", "1/2 teaspoon Active Dry Yeast", "3 3/4 cups Warm Water", "2 cups All-purpose Flour", "1/2 teaspoon Kosher Salt", "3 Tablespoons Olive Oil", "Pesto", "3/4 cups Fresh Basil Leaves", "1/2 cup Grated Parmesan Cheese", "2 Tablespoons Pine Nuts", "2 cloves Garlic, Peeled", "Salt And Pepper, to taste", "1/3 cup Extra Virgin Olive Oil", "TOPPINGS:", "2 whole Zucchini, Cut In Diagonal Slices", "2 whole Summer Squash, Cut In Diagonal Slices", "Olive Oil For Brushing", "1 whole Yellow Bell Pepper", "1 whole Red Bell Pepper", "12 ounces, weight Fresh Mozzarella, Sliced", "4 ounces, weight Goat Cheese", "Extra Basil Leaves, For Garnish", "Grated Or Shaved Parmesan Cheese, For Sprinkling"
]

const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'ozs', 'teaspoon', 'teaspoons', 'cups', 'pounds'];
const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];

const domElement = document.querySelector('.root');

const processedIng = stringArr.map(el => {
    //1 replace abbreviation
    let ingred = el.toLocaleLowerCase();
    unitsLong.forEach((elem, idx) => ingred = ingred.replace(elem, unitsShort[idx]))
    //2 remove parentheses
    ingred = ingred.replace(/ *\([^)]*\) */g,'')
    //3 parse ingredientd  into COUNT, UNIT, INGREDIENT
    const arrIngredient = ingred.split(' ')
    let unitIndex = arrIngredient.findIndex(ingEl => unitsShort.includes(ingEl))
    console.log(unitIndex)
    let ingObject;
    if(unitIndex > -1){
        //it has unit
        let count = arrIngredient.slice(0, unitIndex)

        let countDigit;
        if(count.length === 1){
            countDigit = eval(arrIngredient[0].replace('-', '+'))
        }else{
            countDigit = eval(count.join('+'))
        }

        ingObject = {
            count: countDigit,
            unit: arrIngredient[unitIndex],
            ingred: arrIngredient.slice(unitIndex + 1).join(' '),
        }
        
    }else if(parseInt(arrIngredient[0], 10)){
        //no unit but there is number
        ingObject = {
            count: parseInt(arrIngredient[0], 10),
            unit: '',
            ingred: arrIngredient.slice(1).join(' '),
        }
    }else if(unitIndex === -1){
        //no unit, no number
        ingObject = {
            count: 1,
            unit: '',
            ingred,
        }
    }
    return ingObject;
})

console.log(processedIng)