(function(){
    'use strict';

    var defaultBgColor = 'rgba(0,0,0,0)';

    angular.module('app')

    .controller('HomeController', ['$timeout', 'dataService', 'bubbleService', 'gemService', 'gooService', function ($timeout, dataService, bubbleService, gemService, gooService) {
        var animationServiceMap = {
            lavi: gemService,
            russell: bubbleService,
            dillon: gooService
        };

        var scope = this;
        $timeout(function() {
            particleground(document.getElementById('bg'), {
                dotColor: "#333333",
                lineColor: "#B8E986",
                density: 17000
            });
        });

        dataService.getPromise().then(function(response) {
            scope.employees = response.data;
        });

        this.handleEmployeeEnter = function(key) {
            var service = animationServiceMap[key];
            $('#bg').addClass(service.getFadeAnimationClass());
            service.generateAnimation();
        };

        this.handleEmployeeLeave = function(key) {
            $('#bg').removeClass('bubble-fading')
                .removeClass('gem-fading')
                .removeClass('goo-fading')
                .addClass('default-fading');
            animationServiceMap[key].resetAnimation();
        };

        this.getNumber = function(num) {
            return new Array(num);
        };
    }]);
})();