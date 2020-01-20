const path = require("path");
const express = require("express");
const session = require('express-session');

const cors = require('cors');
const helmet = require('helmet');
const BodyParser = require('body-parser');
const CookieParser = require('cookie-parser');
const csrf = require('csurf')
const compression = require('compression');

const DIST_DIR = path.join(__dirname, "build");
const PORT = 8080;
const app = express();

app.set('trust proxy', 1);
app.use(session({
  secret: 'session keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'videohunt.com',
    path: '/'
  }
}));

app.use(cors())
app.use(helmet())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
  extended: true
}));
app.use(CookieParser());
app.use(csrf({ cookie: true }));

// compress all responses
app.use(compression())
var proxy = require('express-http-proxy');

app.use(express.static(DIST_DIR));

app.use('/api/', proxy('localhost:8811', {
  proxyReqPathResolver: function (req) {
    var parts = req.url.split('?');
    var queryString = parts[1];
    var updatedPath = parts[0];
    return updatedPath + (queryString ? '?' + queryString : '');
  }
}));

app.get("*", function (req, res) {
  res.setHeader("Set-Cookie", "HttpOnly; Secure; SameSite=None");
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, function () {
  console.log('Server is running at localhost on port:' + PORT);
});