(function() {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'app.homePage',
        'app.laviPage'
    ])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        //some Comment push check

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
})();