// Supplies the environment used by the API server
var path = require('path');

function environment() {

    /**
     * Host where the mongo db server is running
     */
    var API_SERVER_HOST = process.env.API_SERVER_HOST || 'localhost';

    /**
     * Port for mongo db server, default 27017
     */
    var API_SERVER_PORT = normalizeNumber(process.env.API_SERVER_HOST || '3000');

    /**
     * port to start node server, default 8080
     */
    var NODE_SERVER_PORT = normalizeNumber(process.env.NODE_SERVER_PORT || '8080');

    /**
     * Specific location to store log files.
     * Directory structure will be created if not exists.
     */
    var NODE_LOGS_LOCATION = process.env.NODE_LOGS_LOCATION || path.join(__dirname, '/../logs/');

    /**
     * environment should be set to 'production' in  deployment
     */
    var NODE_ENV = process.env.NODE_ENV || 'development';

    /**
     * session timeout for user session, default 600s = 10min
     */
    var USER_SESSION_TIMEOUT = normalizeNumber(process.env.USER_SESSION_TIMEOUT || '600');

    /**
     * Normalize value into a number
     */
    function normalizeNumber(val) {
        var num = parseInt(val, 10);

        return num;
    }

    /**
     * Get the MongoDB connection Url
     */
    function apiServerConnectionUrl() {
        var connUrl = 'http://' + API_SERVER_HOST + ':' + API_SERVER_PORT;

        return connUrl;
    }

    /**
     * Mongo db connection Url
     */
    var API_SERVER_CONNECTION_URL = apiServerConnectionUrl();

    /**
     * Exposed environment.
     * 
     * @public
     */
    var environment = {
        NODE_SERVER_PORT: NODE_SERVER_PORT,
        NODE_LOGS_LOCATION: NODE_LOGS_LOCATION,
        NODE_ENV: NODE_ENV,
        USER_SESSION_TIMEOUT: USER_SESSION_TIMEOUT,
        API_SERVER_CONNECTION_URL: API_SERVER_CONNECTION_URL
    };

    return environment;
}

module.exports = environment()