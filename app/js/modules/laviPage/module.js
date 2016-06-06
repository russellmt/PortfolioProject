(function() {
  'use strict';

  angular.module('app.laviPage', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/lavi', {
          templateUrl: 'partials/laviPage.html'
        });
      }])
})();
