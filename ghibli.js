const baseURL = 'https://ghibliapi.herokuapp.com/people';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

function displayResults(name) {
console.log(name);

title.forEach((name) => {

    let clearfix = document.createElement('div');
    let clearfix2 = document.createElement('div');

    para.textContent = name.name 
    para2.textContent = name.type
    para3.src = name.title[0]

    const submitBtn= document.querySelector('.controls');

    article.appendChild(clearfix);
    article.appendChild(clearfix2);
    article.appendChild(img);
    
 
})
}

const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click',  wrap );


function wrap() {
    fetch(baseURL).then(function (result) {
        return result.json(); 
    }).then(function (json) {
        displayResults(json); 

    })
}