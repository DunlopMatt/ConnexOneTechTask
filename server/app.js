var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const prometheusMiddleware = require('express-prometheus-middleware');

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//Prometheus Meddleware

app.use(prometheusMiddleware({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  authenticate: req => req.headers.authorization === 'mysecrettoken',
}),
);

//routes

app.get('/time', function(req, res) {
  let serverTime = Math.floor(Date.now()/1000);
  res.send({serverTime});
});

function auth(req, res, next){
  if(req.headers.authorization == 'mysecrettoken'){
    next();
  }
  else{
  res.send('no auth')
  }
}

module.exports = app;
