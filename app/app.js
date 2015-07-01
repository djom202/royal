/* global angular */

'use strict';

require('angular');
require('angular-ui-router');
require('angular-resource');
//require('./bower_components/angular-fontawesome/dist/angular-fontawesome.min')

var movies = require('./routes/movies')
  , config = require('./config')
;

var app = angular.module('royalApp', [
  /**
   * Globals
   */
   //'picardy.fontawesome',
   'ngResource',
   'ui.router',
   
   /**
    * Locals
    */
   movies.name
]);

/**
 * When an error occurs, this method will intercept it
 */
app.factory('ErrorInterceptor', function ($q) {
  return {
    responseError: function(rejection) {
      if(rejection.status === 500 && !rejection.data.success) {
        var msg = JSON.parse(rejection.data.data.message)
          , err = ""
        ;
        
        Object.keys(msg).forEach(function(k) {
          err += msg[k].join("\n") + "\n";
        });
        
        alert(err);
      }
      
      return $q.reject(rejection);
    }
  };
});

/**
 * Config
 */
app.config(
  [
    '$httpProvider', function ($httpProvider) {
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
      
      $httpProvider.defaults.useXDomain = true;
      $httpProvider.interceptors.push('ErrorInterceptor');
    }
  ]
).run(
  [
    '$http', function ($http) {
      $http.defaults.headers.common = config.app.headers;
    }
  ]
);