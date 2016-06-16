(function(){
    'use strict';

    var defaultBgColor = 'rgba(0,0,0,0)';

    angular.module('app')

    .controller('HomeController', ['$timeout', 'dataService', 'bubbleService', 'gemService', function ($timeout, dataService, bubbleService, gemService) {
        var animationServiceMap = {
            lavi: gemService,
            russell: bubbleService
        };

        var scope = this;
        $timeout(function() {
            particleground(document.getElementById('bg'), {
                dotColor: "#333333",
                lineColor: "#B8E986",
                density: 13000
            });
        });

        dataService.getPromise().then(function(response) {
            scope.employees = response.data;
        });

        this.handleEmployeeEnter = function(key) {
            var service = animationServiceMap[key];
            $('#bg')[0].style.animation = service.getFadeAnimation() + ' 500ms forwards';
            service.generateAnimation();
        };

        this.handleEmployeeLeave = function(key) {
            $('#bg')[0].style.animation = 'fadeToDefault 500ms forwards';
            animationServiceMap[key].resetAnimation();
        };

        this.getNumber = function(num) {
            return new Array(num);
        };
    }]);
})();