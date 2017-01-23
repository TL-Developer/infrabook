'use strict';

var express        = require('express')
  // , consign        = require('consign')
  , load           = require('express-load')
  , bodyParser     = require('body-parser')
  , methodOverride = require('method-override')
  , helmet         = require('helmet')
  , config         = require('config')
  , passport       = require('passport')
  , session        = require('express-session');

module.exports = () => {
  var app = express();

  app.set('port', process.env.PORT || 8080);

  app.set('json spaces', 4);

  app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded(config.get('bodyParser')));
  app.use(methodOverride());

  app.use(helmet());
  app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
  app.disable('x-powered-by');
  app.use(helmet.ieNoOpen());

  app.use(express.static('./public'));


  app.use(session({secret: 'anystringoftext', saveUninitialized: true, resave: true}));
  app.use(passport.initialize());
  app.use(passport.session());

  // TENTANDO ACHAR O MOTIVO DE QUE O HEROKU DA ERRO COM CONSIGN
  // consign({cwd: 'app', logger: console})
  //   .include('models')
  //   .then('controllers')
  //   .then('routes')
  //   .into(app);

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);


  require('./passport')(passport, app);

  return app;
};
