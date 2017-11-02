var path = require("path"),
  express = require("express");
var compression = require('compression')

var DIST_DIR = path.join(__dirname, "build"),
  PORT = 8080,
  app = express();
// compress all responses
app.use(compression())
var proxy = require('express-http-proxy');

app.use(express.static(DIST_DIR));

app.use('/api/', proxy('localhost:3000', {
  proxyReqPathResolver: function (req) {
    return require('url').parse('/api' + req.url).path;
  }
}));

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, function () {
  console.log('Server is running at localhost on port:' + PORT);
});