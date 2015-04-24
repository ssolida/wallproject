'use strict';

angular.module('wallprojectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/immobilier', {
        templateUrl: 'app/immobilier/immobilier.html',
        controller: 'ImmobilierCtrl'
      });
  });
