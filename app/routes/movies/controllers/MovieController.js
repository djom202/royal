'use strict';

var config = require('../../../config')
  , $ = require('jquery')
;

require('../../../libs/jquery.adslide');
require('../../../libs/jquery.slider');

var MovieController = function ($window, $state, Movie) {
	this.$window = $window;
	this.$state = $state;
	this.Movie = Movie;
	
	$("#ad").adslide();
};

MovieController.$inject = ['$window', '$state', 'Movie'];

module.exports = MovieController;