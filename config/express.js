var express = require('express');
var home = require('../app/routes/home');
var load = require('express-load');

module.exports = function() {
    var app = express();
    
    // configuração de ambiente
    app.set('port', 3000)

    // middleware do express
    app.use(express.static('./public'));
    
    // middlewares da engine EJS
    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    //express load loading
    load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

    return app;
};