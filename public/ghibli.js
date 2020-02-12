const baseURL = 'https://ghibliapi.herokuapp.com/films';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
const resultsDiv = document.querySelector('.results')


searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    url = baseURL;
    console.log("URL:", url);


    fetch(url)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        console.log(json)
        displayResults(json);
    })
}

function displayResults(json) {
    // while (section.firstChild) {
    //     section.removeChild(section.firstChild);
    // }
        
        let sections = json;
        
        if (sections.length === 0) {
            let para = document.createElement('p');
            para.textContent = "Did you mean: Akira?";
            sections.appendChild(para);
        } else {
            for (let i = 0; i < sections.length; i++) {
                let card = document.createElement('section');
                let heading = document.createElement('h1');
                let para = document.createElement('p');
                
                let current = sections[i];
                let description = current.description
                let title = current.title
                
                heading.textContent = title;
                para.textContent = description;
                
                card.setAttribute('class', 'card');
                heading.setAttribute('class', 'heading');
                para.setAttribute('class', 'para');
                card.appendChild(heading);
                card.appendChild(para);
                section.appendChild(card);
                resultsDiv.setAttribute('id', 'display-box')
            }
        }


};