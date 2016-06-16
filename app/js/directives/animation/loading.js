//todo: right now we are adding this to the app.homePage module since it is only used by that module
//todo: eventually we will combine all modules into one - app or something

//note: only one loading animation can be created at a time -- id attribute is used to manipulate svg

(function() {
    'use strict';

    var ORDER = [
        'ball',
        'fan',
        'mushroom',
        'clamp',
        'scythe',
        'cat',
        'hat',
        'note',
        'anemone',
        'cross',
        'dots',
        'rectangle'
    ];

    angular.module('app')

    .directive('loadingAnimation', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/svg/loading.html',
            link: function(scope, element, attrs) {
                var timeline = new TimelineLite();
                var path = document.getElementById(ORDER[0]);
                var svg = document.getElementById('loadingSvg');
                var loadBg = document.getElementById('loadBg');

                for (var i = 1, len = ORDER.length; i < len; i++) {
                    timeline.to(path, 0.25, {
                        morphSVG: '#' + ORDER[i]
                    });
                }
                timeline.to(svg, 2, {scale: 8}, '-=.25')
                    .to(path, 1, {fill: 'white'}, '-=2')
                    .to(loadBg, 2, {opacity: 0}, '-=1.3')
                    .set(path, {visibility: 'hidden'})
                    .set(svg, {visibility: 'hidden'})
                    .set(loadBg, {visibility: 'hidden'});
            }
        };
    });
})();