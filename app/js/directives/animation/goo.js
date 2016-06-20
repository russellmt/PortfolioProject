(function() {
    'use strict';

    function getShuffledIndices() {
        var indices = [1,2,3,4,5,6];
        var shuffledIndices = [];
        while (indices.length > 0) {
            var selection = Math.round(Math.random() * (indices.length - 1));
            shuffledIndices.push(indices[selection]);
            indices.splice(selection, 1);
        }
        return shuffledIndices;
    }

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
                        var indices = getShuffledIndices();

                        timeline.to(path, 0.5, {morphSVG: '.gooFrame' + indices[0]})
                            .to(path, 0.5, {morphSVG: '.gooFrame' + indices[1]})
                            .to(path, 0.5, {morphSVG: '.gooFrame' + indices[2]})
                            .to(path, 0.5, {morphSVG: '.gooFrame' + indices[3]})
                            .to(path, 0.5, {morphSVG: '.gooFrame' + indices[4]})
                            .to(path, 0.5, {morphSVG: '.gooFrame' + indices[5]});
                    });
                } else {
                    throw new Error('Error with directive gooAnimation: Missing gooid property');
                }
            }
        };
    }]);
})();