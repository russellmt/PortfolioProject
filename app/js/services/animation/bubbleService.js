angular.module('app.homePage')

.service('bubbleService', ['$compile', '$timeout', function($compile, $timeout) {
    this.generateBubbleEffect2 = function(scope, numBubbles) {
        var bubbleCount = numBubbles || 3;
        for (var i = 0; i < bubbleCount; i++) {
            debugger;
            var id = 'bubble' + i;
            var bubbleDirective = $compile(
                '<bubble-animation bubbleid="\'' + id + '\'"></bubble-animation>'
            )(scope);
            $('body').append(bubbleDirective);
            
            $timeout(function() {
                var bubble = bubbleDirective.children[0];

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
            });
        }
    };

    this.resetBubbles2 = function() {
        $('bubble-animation').remove();
    };
    
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
