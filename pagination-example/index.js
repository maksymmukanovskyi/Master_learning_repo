"use strict"
let fetchBackground = query => fetch(`https://pixabay.com/api/?key=9603142-d66551022b569be6f23252593&q=${query} sky&category=nature`)
        .then(data => data.json()).then(data => data.hits)

const domElements = {
        root: document.querySelector('.root'),
        navButtons: document.querySelector('.result__pages'),
        initSearchBtn: document.querySelector('.search'),
        inputField: document.querySelector('#inputData')
        }        
        
function clearResults(){
        domElements.root.innerHTML = '';
        domElements.navButtons.innerHTML = '';
        }




const  renderImages = (data) => {
        let markup = `<div class="pics"><img  src="${data.largeImageURL}" alt="dogs"></div>`;
        domElements.root.insertAdjacentHTML('beforeend', markup);
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

let renderResult = (page = 1, resPerPage = 5) => {
        const start = (page -1) * resPerPage;
        const end = page *resPerPage;
        
        fetchBackground(inputVal.val).then(data => {
        data.slice(start, end).forEach(renderImages)
        console.log(data)
        renderBtn(page, data.length, resPerPage)
        })
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

        // let arr = [
        //         'hello my name is Kolya',
        //         'im senior software engeneer',
        //         'finished bootcamp and already works',
        //         'im really heppy to do this job',
        // ]

        // const limitWord = (str, size) => {
        //         const newArr = [];
        //         if(str.length >= size){
        //                 str.split(' ').reduce((acc, el) =>{
        //                         if(acc + el.length < size){
        //                                 newArr.push(el)
        //                         }
        //                         return acc + el.length;
        //                 },0)
        //                 return `${newArr.join(' ')}...`
        //         }
        //         return str;
                
        // }

        // let res = arr.map(el => limitWord(el, 9))
        // console.log(res)