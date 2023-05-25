const axios = require('axios');

axios
    .get("https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/products")
    .then((response) => {
        console.log(response);
    })