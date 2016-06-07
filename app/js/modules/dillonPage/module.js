(function() {
    'use strict';

    angular.module('app.dillonPage', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/dillon', {
                templateUrl: 'partials/dillonPage.html',
                controller: 'resumeController',
                controllerAs: 'resumeCtrl'
            });
        }])
})();
