(function () {
    'use strict';

    angular.module('app.dillonPage')

    .directive('poop', function () {
        return {
            restrict: 'E',
            template: '{{curLine}}'

        };
    });
})();
