"use strict"
let fetchBackground = query => fetch(`https://pixabay.com/api/?key=9603142-d66551022b569be6f23252593&q=${query} sky&category=nature`)
        .then(data => data.json()).then(data => data.hits)
        
        



let  renderImages = (data) => {
 let markup = `<div class="pics"><img  src="${data.largeImageURL}" alt="dogs"></div>`;
 document.querySelector('.root').insertAdjacentHTML('beforeend', markup);
}

const createBtn = (page, type) => `
<button class="btn-inline results__btn--${type} data-goto="${type === "prev"? page - 1 : page + 1}">
        <span>Page ${type === "prev"? page - 1 : page + 1}</span>
</button>`;

const renderBtn = (page, numRes, resPerPage) => {
        const pages = Math.ceil(numRes / resPerPage);
        let button;
        if(page === 1 && pages > 1){
                button = createBtn(page, 'next')
        }else if(page < pages){
                button = `${button = createBtn(page, 'prev')}
                          ${button = createBtn(page, 'next')}`
        }else if(page === pages && pages > 1){
                button = createBtn(page, 'prev');
        }
        console.log(button)
 document.querySelector('.result__pages').insertAdjacentHTML('afterbegin', button);
}


let renderResult = (page = 1, resPerPage = 5) => {
        const start = (page -1) * resPerPage;
        const end = page *resPerPage;
        


        fetchBackground('dog').then(data => {

        data.slice(start, end).forEach(renderImages)
        renderBtn(page, data.length, resPerPage)

        })

        
}







document.querySelector('.search').addEventListener('click', () => {
        renderResult();
})
