'use strict';

const chuckSays = document.getElementById('chuckSays');
const refreshQuote = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');
const modalOverlay = document.querySelector('.modal-overlay');
const modalCloseButton = document.getElementById('closeModal');
let category = 'dev';

const getQuote = () => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then((fetchResponse) => {
        chuckSays.innerHTML = fetchResponse.value;
        modalOverlay.classList.toggle('open');
    });
};

const getCategories = () => {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const dropdownMenu = document.getElementById('categoryInput');
    get(url).then((categoryArray) => {
        categoryArray.map((category) => {
            if (category !== 'explicit') {
                const categoryOption = document.createElement('option');
                categoryOption.value = category;
                categoryOption.text = category;
                dropdownMenu.append(categoryOption);
            }
        });
    });
};

refreshQuote.addEventListener('click', (e) => {
    e.preventDefault();
    getQuote();
});

// submitFormButton.addEventListener('click', (e) => {

// });

const getChuckQuotes = document.getElementById('getChuckQuotes');
getChuckQuotes.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = document.getElementById('categoryInput');
    category = userInput.value;
    getQuote();
});

modalCloseButton.addEventListener('click', function (e) {
    modalOverlay.classList.toggle('open');
});

(function () {
    getCategories();
    getQuote();
})();
