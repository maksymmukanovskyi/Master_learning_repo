export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list'),
    searchRes: document.querySelector('.results'),
    searchResPages: document.querySelector('.results__pages'),
}

export const elementstring = {
    loader: 'loader',
}

export const renderLoader = parent => {
    const loader = `
    <div class= "${elementstring.loader}"> 
    <svg>
        <use href="./sprite.svg#icon-cw"></use>
    </svg>
    </div>    
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementstring.loader}`)
    if(loader) loader.parentElement.removeChild(loader);
}