'use strict';

/**
 * @ngdoc overview
 * @name loginParseApp
 * @description
 * # loginParseApp
 *
 * Main module of the application.
 */
angular
  .module('loginParseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
