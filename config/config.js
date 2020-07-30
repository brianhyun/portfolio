const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN,
    port: process.env.PORT
};