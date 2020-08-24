'use-strict';

const chuckSays = document.getElementById('chuckSays');

function get() {
    // Step 1: Fetch the data
    return fetch('https://api.chucknorris.io/jokes/random?category=dev')
        // Step 2: Run the json() method from the Response
        .then(function (response) {
            return response.json();
        })
        // Step 3: Return the data from the response.json metho
        .then(function (data) {
            return data;
        })

}

(function () {
    get().then(function (response) {
        chuckSays.innerHTML = response.value;
    })
})();