(function() {
    'use strict';

    angular.module('app.dillonPage', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/dillon', {
                templateUrl: 'partials/gameDisplay.html',
                controller: 'GameController',
                controllerAs: 'GameCtrl'
            });
        }])
})();