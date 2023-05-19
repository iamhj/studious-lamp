const http = require('http');
const fs = require('fs');

// const options = {
//     hostname: 'www.google.com',
//     port: 80,
//     path: '',
//     method: 'GET'
// };

const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET',
    agent: new http.Agent({ 
      proxy: {
        host: '127.0.0.1',
        port: 7890
      }
    })
  };

const req = http.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    let responseBody = '';

    res.on('data', (data) => {
        responseBody += data;
    });

    res.on('end', () => {
        fs.writeFile('../static/googleSearch.html', responseBody, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Response data saved to my_ajax.html');
            }
        });
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.end();
