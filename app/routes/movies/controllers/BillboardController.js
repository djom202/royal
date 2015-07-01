'use strict';

var config = require('../../../config')
  , $ = require('jquery')
;

require('../../../libs/jquery.adslide');

var BillboardController = function ($window, $state, Movie) {
	this.$window = $window;
	this.$state = $state;
	this.Movie = Movie;
	
	console.log("Billboard")
	$("#ad").adslide();
};

BillboardController.$inject = ['$window', '$state', 'Movie'];

module.exports = BillboardController;