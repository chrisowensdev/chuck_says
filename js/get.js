'use strict';

function get(url) {
    // Step 1: Fetch the data
    return fetch(url)
        // Step 2: Run the json() method from the Response
        .then(function (response) {
            return response.json();
        })
        // Step 3: Return the data from the response.json metho
        .then(function (data) {
            return data;
        })

}