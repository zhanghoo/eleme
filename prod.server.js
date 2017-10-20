var express = require('express');
var config = require('./config/index');

//在 config/index.js->build中添加port: 9000
var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function(req, res, next) {
	req.url = '/index.html';
	next();
})

app.use(router);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    var uri = 'http://localhost:' + port;
    console.log('Listening at ' + uri + '\n');
});