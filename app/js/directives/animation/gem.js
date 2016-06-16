(function() {
    'use strict';

    angular.module('app')

    .directive('emeraldAnimation', [function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/svg/gem.html'
        };
    }]);
})();