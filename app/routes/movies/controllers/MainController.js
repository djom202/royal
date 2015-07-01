'use strict';

var config = require('../../../config')
  , $ = require('jquery')
;

require('../../../libs/jquery.adslide');
require('../../../libs/jquery.slider');

var MainController = function ($window, $state, Movie) {
	this.$window = $window;
	this.$state = $state;
	this.Movie = Movie;
	
	$("#ad").adslide();
	
	$("#slider").slider({
		slides: [
			{
				header: 'http://www.beachbodytan-lebanon.com/index_htm_files/5.jpg',
				background: '',
				title: 'Miss Hola'
			}, {
				header: 'http://www.beachbodytan-lebanon.com/index_htm_files/201.png',
				background: '',
				title: 'Miss Atommic Bomb'
			}, {
				header: 'http://i.blogs.es/f5482e/project-cars-1/1024_2000.jpg'
			}
		]
	});
};

MainController.$inject = ['$window', '$state', 'Movie'];

module.exports = MainController;