(function() {
    'use strict';

    angular.module('app')

    .service('bubbleService', [function() {
        this.generateAnimation = function() {
            var bubbleDirectives = $('bubble-animation');
            for (var i = 0, len = bubbleDirectives.length; i < len; i++) {
                var bubble = bubbleDirectives[i].children[0];

                var randomSpawnLeft = Math.round(Math.random() * 85) + 10;
                var randomSpawnTop = Math.round(Math.random() * 30) + 80;
                var randomSize = Math.round(Math.random() * 80) + 20;
                var randomSpeed = Math.round(Math.random() * 2) + 1;
                var randomOffset = Math.round(Math.random() * 300) - 150;

                bubble.style.width = randomSize + 'px';
                bubble.style.height = randomSize + 'px';
                bubble.style.left = randomSpawnLeft + '%';
                bubble.style.top = randomSpawnTop + '%';
                bubble.style.visibility = 'visible';
                bubble.style.animation = 'bubbleFloat ' + randomSpeed + 's forwards';
            }
        };

        this.resetAnimation = function() {
            var bubbleDirectives = $('bubble-animation');
            for (var i = 0, len = bubbleDirectives.length; i < len; i++) {
                var bubble = bubbleDirectives[i].children[0];
                bubble.removeAttribute('style');
            }
        };

        this.getFadeAnimation = function() {
            return 'fadeToBlue';
        };

    }]);

})();