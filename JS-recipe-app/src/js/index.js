import '../styles/styles.css';
import Search from './models/Search';
import {elements, renderLoader, clearLoader, elementstring} from './views/base';
import * as searchView from './views/searchView';

/* Global state of the app
-search object
-current recipe object
-shopping list object
-liked recipes
*/
const state = {};

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
        //4. Search for recipes
        await state.search.getResults();
        // 5. Render resaults on UI
        searchView.renderResults(state.search.recipes)
        clearLoader();
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