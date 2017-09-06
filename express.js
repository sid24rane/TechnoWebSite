var express = require('express')
var session = require('express-session')
var url = require('url')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
app.set('view engine', 'pug')
app.use(express.static('public/loginSignup'))
app.use(express.static('public/ourTeamedit'))
app.use(express.static('public/events/radar'))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  //key: 'user_sid',
  secret: 'the_dawn_of_tech_is_here',
  duration: 2 *60 * 60 * 1000,
  resave: false,
  saveUninitialized: false,
  cookie: {
  	//expires:600000
  }
}))

// app.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.user) {
//         res.clearCookie('user_sid');        
//     }
//     next();
// });

// var sessionChecker = (req, res, next) => {
//     if (req.session.user && req.cookies.user_sid) {
//         res.redirect('/homepage');
//     } else {
//         next();
//     }    
// };

module.exports = app