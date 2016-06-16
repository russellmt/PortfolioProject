(function() {
    angular.module('app.homePage')

    .directive('emeraldAnimation', [function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/svg/gem.html'
        };
    }]);
})();