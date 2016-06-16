(function() {
    angular.module('app.homePage')
    
    .service('gemService', [function() {
        this.generateAnimation = function() {
            var emeraldDirectives = $('emerald-animation');
            for (var i = 0, len = emeraldDirectives.length; i < len; i++) {
                var emerald = emeraldDirectives[i].children[0];

                var randomSpawnLeft = Math.round(Math.random() * 85) + 10;
                var randomSpawnTop = Math.round(Math.random() * 30) - 40;
                var randomSize = Math.round(Math.random() * 80) + 20;
                var randomOffset = Math.round(Math.random() * 300) - 150;

                emerald.style.width = randomSize + 'px';
                emerald.style.height = randomSize + 'px';
                emerald.style.left = randomSpawnLeft + '%';
                emerald.style.top = randomSpawnTop + '%';
                emerald.style.visibility = 'visible';
                emerald.style.animation = 'emeraldFall 1200ms forwards ease-in';
            }
        };

        this.resetAnimation = function() {
            var emeraldDirectives = $('emerald-animation');
            for (var i = 0, len = emeraldDirectives.length; i < len; i++) {
                var emerald = emeraldDirectives[i].children[0];
                emerald.removeAttribute('style');
            }
        };

        this.getFadeAnimation = function() {
            return 'fadeToGreen';
        };

    }]);
})();