(function() {
    'use strict';

    angular.module('app', ['ngRoute'])

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
            templateUrl: 'partials/dillonPage.html',
            controller: 'resumeController',
            controllerAs: 'resumeCtrl'
        })

        .otherwise({
            redirectTo: '/home'
        });
    }]);
})();