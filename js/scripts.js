'use-strict';

const chuckSays = document.getElementById('chuckSays');
const refreshQuote = document.getElementById('refreshQuote');
const submitFormButton = document.getElementById('submitForm');

const defaultCategory = "dev";


const getQuote = (category) => {
    get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(function (response) {
            chuckSays.innerHTML = response.value;
        })
}

refreshQuote.addEventListener('click', function (e) {
    e.preventDefault();
    getQuote(defaultCategory);
});

submitFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    const userInput = document.getElementById('categoryInput');
    const category = userInput.value;
    getQuote(category);
});



(function () {
    getQuote(defaultCategory);
})();