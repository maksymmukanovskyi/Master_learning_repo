import '../styles/styles.css';
import Search from './models/Search';
import Recipe from './models/Recipe';
import {elements, renderLoader, clearLoader, elementstring} from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';


/* Global state of the app
-search object
-current recipe object
-shopping list object
-liked recipes
*/
const state = {};

///////////////////////////////* Search controller *//////////////////////////////////

const controlSearch = async () => {
    // 1. get query fromview
    const query = searchView.getInput();

    console.log(query)

    if(query){
        //2. New search object and add to state
        state.search = new Search(query);
        //3. Prepare UI for resault (spinner)
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes)
        
        try{
            //4. Search for recipes
        await state.search.getResults();
        // 5. Render resaults on UI
        searchView.renderResults(state.search.recipes)

        clearLoader();
        }catch(error){
            alert('something wrong with search...')
            clearLoader();
        }
        
    }

}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})



elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline')
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.recipes, goToPage)
    }
})

///////////////////////////////* Resipe controller *//////////////////////////////////


const controlRecipe = async () => {
    //get id from URL
    const id  = window.location.hash.replace('#', '');
    
    
    if(id){
        //prepare UI for changes
        recipeView.clearRecipe();
 
        renderLoader(elements.recipe)
        state.recipe = new Recipe(id)

        // highlight selected
        if(state.search) searchView.highlightSelected(id)
        
        try{
            //get recipe data and parse ingredients
        await state.recipe.getRecipe()
        //claculate servings and time
        state.recipe.clacTime();
        state.recipe.calcServings();
        state.recipe.parseIngredients();

        //render recipe
        clearLoader();
        recipeView.renderRecipe(state.recipe)
        
        }catch(error){
            // clearLoader();
            alert('Error processin recipe!')
        }
        
    }
}

// window.addEventListener('hashchange', controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe))


