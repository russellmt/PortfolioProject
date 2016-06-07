(function() {
  'use strict';

  angular.module('app.russellPage', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/russell', {
          templateUrl: 'partials/russellPage.html'
        });
      }])
})();
