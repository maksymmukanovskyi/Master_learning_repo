import axios from 'axios';

export default class Recipe{
    constructor(id){
        this.id = id;
    }

    async getRecipe() {
        try{
            const result = await axios(`https://forkify-api.herokuapp.com/api/get?&rId=${this.id}`);
            this.title = result.data.recipe.title;
            this.author = result.data.recipe.publisher;
            this.img = result.data.recipe.image_url;
            this.url = result.data.recipe.source_url;
            this.ingredients = result.data.recipe.ingredients;
        }catch (error){
            console.log(error)
            alert('No id found :(')
        }
    }

    clacTime(){
        //assuming that we need 15 minutes for each period(3 ingredients)
        const numIng =  this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings(){
        this.servings = 4;
    }
}