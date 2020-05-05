"use strict"
let fetchBackground = query => fetch(`https://pixabay.com/api/?key=9603142-d66551022b569be6f23252593&q=${query} sky&category=nature`)
        .then(data => data.json()).then(data => data.hits)

const domElements = {
        root: document.querySelector('.root'),
        root2: document.querySelector('.root-2'),

        navButtons: document.querySelector('.result__pages'),
        initSearchBtn: document.querySelector('.search'),
        inputField: document.querySelector('#inputData')
        }        
        
function clearResults(){
        domElements.root.innerHTML = '';
        domElements.navButtons.innerHTML = '';
        }



const  renderImages = (data) => {
        let markup = `<a class="pics" href="#${data.id}">
        <img  src="${data.largeImageURL}" alt="dogs">
        </a>`;
        domElements.root.insertAdjacentHTML('beforeend', markup);
        }
const renderMainImg = (data) => {
    let markup = `<div><img class="mainImg" src= "${data.largeImageURL}" ></img></div>`
    domElements.root2.insertAdjacentHTML('beforeend', markup);
    // document.querySelector('body').style.backgroundImage = `url(${data.largeImageURL})`;
        
}        

const createBtn = (page, type) => `
        <button class="btn-inline results__btn--${type}" data-goto="${type === "prev"? page - 1 : page + 1}">
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
        domElements.navButtons.insertAdjacentHTML('afterbegin', button);
        }


const inputVal = {};
const dataBase = {}

let renderResult = (page = 1, resPerPage = 10) => {
        const start = (page -1) * resPerPage;
        const end = page *resPerPage;
        
        fetchBackground(inputVal.val).then(data => {
        dataBase.picsObj = data;
        data.slice(start, end).forEach(renderImages)
        console.log(data)
        renderBtn(page, data.length, resPerPage)
        })
        }

const hashHandler = async () => {
    domElements.root2.innerHTML ='';
    const ID = parseInt(window.location.hash.replace('#', ''), 10);
    if(ID){
         let data = await dataBase.picsObj
         renderMainImg(data.find(el => el.id === ID))
    }
}        




domElements.initSearchBtn.addEventListener('click', () => {
        inputVal.val = domElements.inputField.value
        if(!inputVal.val)return;
        clearResults();
        renderResult();
        domElements.inputField.value = '';
        });

domElements.navButtons.addEventListener('click', e => {
        let btn = e.target.closest('.btn-inline');
        if(btn){
                const goToPage = parseInt(btn.dataset.goto, 10);
                clearResults();
                renderResult(goToPage);
        }
        })

window.addEventListener('hashchange', hashHandler);        
