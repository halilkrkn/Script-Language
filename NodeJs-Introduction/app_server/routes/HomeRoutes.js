var express = require('express')

//var app = express()

var route = express.Router()

var ctrlHome = require('../controller/HomeController')

route.get('/', ctrlHome.home)

module.exports = route



