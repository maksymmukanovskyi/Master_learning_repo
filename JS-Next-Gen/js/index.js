/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees

4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Property{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Park extends Property{
    constructor(name, buildYear, parkArea, treeNumber){
        super(name, buildYear);
        this.parkArea = parkArea;
        this.treeNumber = treeNumber;
    }
    densityCalc(){
       let result =  this.treeNumber / this.parkArea;
       return result;
    }
}

class Street extends Property{
    constructor(name, buildYear, streetLength, size = 3){
        super(name, buildYear);
        this.streetLength = streetLength;
        this.size = size;
        this.sizesClass = new Map([
            [1, 'tiny'],
            [2, 'small'],
            [3, 'normal'],
            [4, 'big'],
            [5, 'huge']
        ]);
    }
    streerClassification(){
        let definedClass;
        for(let [key, value] of this.sizesClass.entries()){
            key === this.size? definedClass = value: null;
        }
        return definedClass
    }
}


const parks = new Map([
    ['shevchenka', new Park('Shevchenka', 1818, 400, 800)],
    ['gorkogo',  new Park('Gorkogo', 1940, 1900, 1456)],
    ['tsentralnyi', new Park('Tsentralnyi', 1830, 11000, 400)],
    ['franka', new Park('Franka', 1814, 1400, 750)],
]);

const streets = new Map([
    ['radianska', new Street('Radianska', 1756, 75)],
    ['kyivska',  new Street('Kyivska', 1810, 120, 5)],
    ['sofiivska', new Street('Sofiivska', 1936, 36, 4)],
    ['odeska', new Street('Odeska', 1758, 15, 2)],
]);





const adminInfo = {
    parkInfo: {
        findDens: Array.from(parks).map(el => `${el[1].name} has ${(Number(el[1]. densityCalc()).toFixed(2))*100} tree per square km,   `),
        averageAge: Array.from(parks).reduce((acc, el) => acc + (new Date().getFullYear() - el[1].buildYear),0)/parks.size,
        highestTreeNumber: Array.from(parks).filter(el => el[1].treeNumber > 1000),
    
        showParksInfo: function(){
            console.log(`Density is: ${this.findDens.reduce((acc, el)=> acc + el,'')}`);
            console.log(`Average age of parks is: ${this.averageAge}`);
            console.log(`The ${this.highestTreeNumber[0][1].name} park has more than 1000 trees!`);
        }
    },

    streetInfo: {
        totalLengthandAverage: [Array.from(streets).reduce((acc, el) => acc + el[1].streetLength, 0), Array.from(streets).reduce((acc, el) => acc + el[1].streetLength, 0)/streets.size],
        classification: () => streets.forEach(val => console.log(`${val.name}, built in ${val.buildYear}, is a ${val.streerClassification()} street`)),


    showStreetsInfo(){
        console.log(`Our ${streets.size} streets have a total length of ${this.totalLengthandAverage[0]} km, with an average of ${this.totalLengthandAverage[1]} km.`)
        this.classification();
    }
    },
}






adminInfo.parkInfo.showParksInfo();
adminInfo.streetInfo.showStreetsInfo();

