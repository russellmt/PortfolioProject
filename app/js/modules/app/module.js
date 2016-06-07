(function() {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'app.homePage',
        'app.laviPage',
        'app.russellPage',
        'app.dillonPage'
    ])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
})();