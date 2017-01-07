var fs = require('fs');
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var usersStore = require('./models/users-store');

global.Vue = require('vue');
var renderer = require('vue-server-renderer').createRenderer();

var layoutSections = fs.readFileSync('./client/public/index.html', 'utf8').split('<div id="app"></div>');
var preAppHTML = layoutSections[0];
var postAppHTML = layoutSections[1];

var app = express();

// zostawiam ten view engine bo express jest popierdolony i bez tego rzuca bledy.
// kutas.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'client', 'public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client', 'public')));
app.get('/api/user-exists', (req, res) => {
    if(req.query && req.query.name){
        if(usersStore.isUsernameAvailable(req.query.name)){
            return res.json({free: true});
        } else {
            return res.json({free: false, message: "uzytkownik istnieje"});
        }
    } else {
        return res.status(400).send();
    }
});
app.get('*', function (request, response) {
    var stream = renderer.renderToStream(require('./client/public/bundle/bundle')());
    response.write(preAppHTML);
    stream.on('data', function (chunk) {
        response.write(chunk);
    });
    stream.on('end', function () {
        response.end(postAppHTML);
    });
    stream.on('error', function (error) {
        console.error(error);
        return response
            .status(500)
            .send('Server Error')
    })
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log(err);
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
