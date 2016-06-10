(function(){
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

    angular.module('app.homePage')

    .controller('HomeController', ['$timeout', function ($timeout) {
        function animateLoading() {
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

        $timeout(function() {
            animateLoading();
            particleground(document.getElementById('bg'), {
                dotColor: "#333333",
                lineColor: "#B8E986",
                density: 13000

            });
        });


    }]);
})();