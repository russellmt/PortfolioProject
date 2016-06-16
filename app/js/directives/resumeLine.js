(function () {
    'use strict';

    angular.module('app')

    .directive('poop', function () {
        return {
            restrict: 'E',
            template: '{{curLine}}'

        };
    });
})();
