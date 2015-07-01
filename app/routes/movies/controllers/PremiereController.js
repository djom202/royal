'use strict';

var config = require('../../../config')
  , $ = require('jquery')
;

require('../../../libs/jquery.adslide');

var PremiereController = function ($window, $state, Movie) {
	this.$window = $window;
	this.$state = $state;
	this.Movie = Movie;
	
	console.log("Premiere")
	$("#ad").adslide();
};

PremiereController.$inject = ['$window', '$state', 'Movie'];

module.exports = PremiereController;