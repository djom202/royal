'use strict';

var config = require('../../../config');

var Movie = function ($resource) {
	var Movie = $resource([config.app.service.url, 'user', 'login'].join('/'), {}, {
		query: {
			method: 'POST'
		}
	});
	
	return Movie;
};

Movie.$inject = ['$resource'];

module.exports = Movie;