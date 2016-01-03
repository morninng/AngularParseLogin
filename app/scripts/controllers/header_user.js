

'use strict';

/**
 * @ngdoc function
 * @name loginParseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the loginParseApp
 */
angular.module('loginParseApp')
  .controller('HeaderUserCtrl', function ($scope, UserAuthService) {
  	$scope.user = UserAuthService;

  });

