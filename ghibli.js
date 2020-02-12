const baseURL = 'https://ghibliapi.herokuapp.com/films';

function displayResults(title) {
    const [film1, film2] = title;
console.log(film1)

// const x = dragons.map(dragon => dragon.id)
// console.log(x)

title.forEach((film) => {

    const para = document.createElement('div');
    const para2 = document.createElement('div');
    const para3 = document.createElement('img');

    para.textContent = film.name 
    para2.textContent = film.type
    para3.src = film.title[0]

    const submitbt = document.querySelector('.controls');

    submitbt.appendChild(para);
    submitbt.appendChild(para2);
    submitbt.appendChild(para3);
    
 
})
}

const submitbt = document.querySelector('.submit');

submitbt.addEventListener('click',  wrap );


function wrap() {
    fetch(URL).then(function (result) {
        return result.json(); 
    }).then(function (json) {
        displayResults(json); 

    })
}