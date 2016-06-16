//pass in bubbleid so that an individual bubble can be manipulated

(function() {
    'use strict';

    angular.module('app')

    .directive('bubbleAnimation', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'partials/svg/bubble.html',
            scope: {
                bubbleid: '='
            },
            link: function(scope, element, attrs) {
                if (attrs.bubbleid && attrs.bubbleid.length > 0) {

                    $timeout(function() {
                        var bubbleSvg = $('svg#' + scope.bubbleid);
                        var bubble = bubbleSvg.find('path.bubbleFrame1')[0];
                        var timeline = new TimelineMax({repeat: -1});

                        timeline.to(bubble, 0.125, {morphSVG: '.bubbleFrame2'})
                            .to(bubble, 0.125, {morphSVG: '.bubbleFrame3'})
                            .to(bubble, 0.125, {morphSVG: '.bubbleFrame1'});
                    });
                } else {
                    throw new Error('No bubbleid attribute passed into directive bubbleAnimation');
                }
            }
        };
    }]);
})();

