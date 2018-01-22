var fs = require('fs');
var https = require('https');
var app = require('express')();
const options = {
  key: fs.readFileSync('./server/env/private.pem', 'utf8'),
  cert: fs.readFileSync('./server/env/private.crt', 'utf8')
};
var httpsServer = https.createServer(options, app);

var home = require('./home/req');

home.init(app);

httpsServer.listen(3000, function () {
  console.log('HTTP Server is running on: http://localhost:%s', 3000);
});