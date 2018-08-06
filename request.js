var request = require('request');
var fs = require('fs');

request('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', function(err){
        console.log(err);
        throw err;
    })
    .on('response', function(response){
      console.log('Response Code: ' + response);
      console.log('Response Message: ' + response.statusMessage);
      console.log('Response Data Type: ' + response.headers['content-type']);
    })
    .pipe(fs.createWriteStream('./future.jpg'));