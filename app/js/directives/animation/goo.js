(function() {
    'use strict';

    angular.module('app')

    .directive('gooAnimation', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'partials/svg/goo.html',
            scope: {
                gooid: '='
            },
            link: function(scope, element, attrs) {
                if (attrs.gooid && attrs.gooid.length > 0) {
                    $timeout(function() {
                        var svgEl = $('svg#' + scope.gooid);
                        var path = svgEl.find('path.gooFrame1')[0];
                        var timeline = new TimelineMax({repeat: -1});

                        timeline.to(path, 0.25, {morphSVG: '.gooFrame2'})
                            .to(path, 0.25, {morphSVG: 'gooFrame3'})
                            .to(path, 0.25, {morphSVG: 'gooFrame4'})
                            .to(path, 0.25, {morphSVG: 'gooFrame5'})
                            .to(path, 0.25, {morphSVG: 'gooFrame6'})
                            .to(path, 0.25, {morphSVG: 'gooFrame1'});
                    });
                } else {
                    throw new Error('Error with directive gooAnimation: Missing gooid property');
                }
            }
        };
    }]);
})();