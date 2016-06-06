(function() {
  'use strict';

  angular.module('app.', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'js/modules/.html',
          controller: ''
        });
      }])
})();
