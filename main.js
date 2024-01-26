require('dotenv').config();

const json2csv = require('json2csv');
const fs = require('fs');

const getPages = require('./getPages.js');

const token = process.env.ACCESS_TOKEN;

getPages(token)
    .then(response => {
        const pages = response.objects;

        // Specify the fields you want to include in the CSV
        const fields = ['name', 'published_url', 'html_title', 'language', 'subcategory', 'is_published'];

        // Create a CSV string from the JSON data
        const csv = json2csv.parse(pages, { fields });

        // Write the CSV string to a file
        fs.writeFile('output.csv', csv, (err) => {
            if (err) throw err;
            console.log('CSV file has been saved!');
        });
    })
    .catch(error => {
        throw error;
    });

