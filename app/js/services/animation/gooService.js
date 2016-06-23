(function() {
    'use strict';
    
    angular.module('app')
        
    .service('gooService', [function() {

        this.generateAnimation = function() {
            var gooDirectives = $('goo-animation');
            for (var i = 0, len = gooDirectives.length; i < len; i++) {
                var goo = gooDirectives[i].children[0];

                var randomSpawnTop = Math.round(Math.random() * 60);
                var randomSize = Math.round(Math.random() * 100) + 500;
                var randomSpeed = Math.round(Math.random() * 2) + 5;

                var ran = Math.round(Math.random());
                var randomSpawnLeft;
                if (ran === 0) {
                    randomSpawnLeft = '0';
                    goo.style.animation = 'gooFloatRight ' + randomSpeed + 's forwards';
                } else {
                    randomSpawnLeft = '100%';
                    goo.style.animation = 'gooFloatLeft ' + randomSpeed + 's forwards';
                }

                goo.style.width = randomSize + 'px';
                goo.style.height = randomSize + 'px';
                goo.style.left = randomSpawnLeft;
                goo.style.top = randomSpawnTop + '%';
                goo.style.visibility = 'visible';
            }
        };

        this.resetAnimation = function() {
            var gooDirectives = $('goo-animation');
            for (var i = 0, len = gooDirectives.length; i < len; i++) {
                var goo = gooDirectives[i].children[0];
                goo.removeAttribute('style');
            }
        };

        this.getFadeAnimationClass = function() {
            return 'goo-fading';
        };

    }]);
})();