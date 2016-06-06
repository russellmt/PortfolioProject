(function() {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'app.homePage',
        'app.laviPage'
    ])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
})();