/* global angular */

'use strict';

var MovieRouter = require('./router')
  , MainController = require('./controllers/MainController')
  , MovieController = require('./controllers/MovieController')
  , BillboardController = require('./controllers/BillboardController')
  , PremiereController = require('./controllers/PremiereController')
  , Movie = require('./models/Movie')
;

module.exports = angular.module('royalApp.movies', [])
	.factory('Movie', Movie)
	.controller('MainController', MainController)
	.controller('MovieController', MovieController)
	.controller('BillboardController', BillboardController)
	.controller('PremiereController', PremiereController)
	.config(MovieRouter)
;