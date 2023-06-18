const HTTP = require('http');
const app = require('./src/app');
const env = require('./src/config.env');

const port = 8080;

HTTP.createServer(app).listen(port, () => {
    console.log(`PORT NUMBER ${port} SERVER START!!`);
});
