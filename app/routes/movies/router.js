'use strict';

var MovieRouter = function ($stateProvider) {
	$stateProvider
		.state('main', {
			//abstract: true,
			url: '',
			//template: '<ui-view/>',
			views: {
				'headers': {
					templateUrl: 'views/movies/main.html',
					controller: 'MainController',
					controllerAs: 'Ctrl'
				}
			}
		})
		.state('billboard', {
			url: '/cartelera',
			views: {
				'headers': {
					templateUrl: 'views/movies/billboard.html',
					controller: 'BillboardController',
					controllerAs: 'Ctrl'
				}
			}
		})
		.state('premiere', {
			url: '/estrenos',
			templateUrl: 'views/movies/premiere.html',
			controller: 'PremiereController',
			controllerAs: 'Ctrl'
		})
	;
};

MovieRouter.$inject = ['$stateProvider'];

module.exports = MovieRouter;