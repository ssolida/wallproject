'use strict';

angular.module('wallprojectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/map', {
        templateUrl: 'app/map/map.html',
        controller: 'MapCtrl'
      });
  });
