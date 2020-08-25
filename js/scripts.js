'use strict';

const chuckSays = document.getElementById('chuckSays');
const refreshQuote = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');
const defaultCategory = "dev";

const getQuote = (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`
    get(url).then(fetchResponse => {
        chuckSays.innerHTML = fetchResponse.value;
    })
}

const getCategories = () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropdownMenu = document.getElementById('categoryInput');
    get(url).then(categoryArray => {
        categoryArray.map(category => {
            if (category !== 'explicit') {
                const categoryOption = document.createElement('option');
                categoryOption.value = category;
                categoryOption.text = category;
                dropdownMenu.append(categoryOption);
            }
        })
    });
}

refreshQuote.addEventListener('click', (e) => {
    e.preventDefault();
    getQuote(defaultCategory);
});

submitFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('categoryInput');
    const category = userInput.value;
    getQuote(category);
});



(function () {
    getCategories();
    getQuote(defaultCategory);
})();