(function() {
  'use strict';

    angular.module('app.homePage', [
        'ngRoute'
    ])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/homePage.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
    }]);
})();
