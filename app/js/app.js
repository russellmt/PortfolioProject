(function() {
    'use strict';

    angular.module('app', ['ngRoute', 'ngAnimate'])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/home', {
            templateUrl: 'partials/homePage.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })

        .when('/lavi', {
            templateUrl: 'partials/laviPage.html'
        })

        .when('/russell', {
            templateUrl: 'partials/russellPage.html'
        })

        .when('/dillon', {
            templateUrl: 'partials/gameDisplay.html',
            controller: 'GameController',
            controllerAs: 'GameCtrl'
        })

        .otherwise({
            redirectTo: '/home'
        });
    }]);
})();