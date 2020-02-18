const path = require('path');
const express = require('express');
var cors = require('cors')
const BodyParser = require('body-parser');
const csrf = require('csurf')
const CookieParser = require('cookie-parser');
const helmet = require('helmet');
const compression = require('compression');
const proxy = require('express-http-proxy');

const app = express();
app.set('trust proxy', 1);

app.use(cors());
app.use(helmet());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
  extended: true
}));

app.use(CookieParser({
  key: '__csrf_token',
  secure: true,
  httpOnly: true,
  sameSite: 'none'
}));
app.use(csrf({ cookie: true }));

// compress all responses
app.use(compression())

const DIST_DIR = path.join(__dirname, "build");
app.use(express.static(DIST_DIR));

const { API_HOST, API_PORT } = require('./constants');
const apiServer = `${API_HOST}:${API_PORT}`;
app.use('/api', proxy(apiServer, {
  proxyReqPathResolver: function (req) {
    var parts = req.url.split('?');
    var queryString = parts[1];
    var updatedPath = '/api' + parts[0];
    return updatedPath + (queryString ? '?' + queryString : '');
  }
}));

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.use(function (err, req, res, next) {
  const status = err.status || 500;
  console.log(`${status} - ${req.originalUrl} - ${req.method} - ${req.ip} - ${err.stack}`);
  res.status(status).json({ status: 'failed', mesg: 'Something unexpected happen. Try again' });
});

module.exports = { app }
