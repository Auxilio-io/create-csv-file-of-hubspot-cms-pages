const axios = require('./axiosModule.js');

function getPages(token) {
    const options = {
        method: "GET",
        url: `https://api.hubapi.com/content/api/v2/pages?is_draft=false&limit=500`,
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    return axios(options)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

module.exports = getPages;
