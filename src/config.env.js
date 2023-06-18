const dotenv = require('dotenv');
dotenv.config();

class Env {
    PORT;
    constructor() {
        this.PORT = Number(process.env.PORT);
    }
}

module.exports = new Env();
