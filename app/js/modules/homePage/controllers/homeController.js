(function(){
    'use strict';

    var defaultBgColor = 'rgba(0,0,0,0)';

    angular.module('app.homePage')

    .controller('HomeController', ['$timeout', 'bubbleService', 'gemService', function ($timeout, bubbleService, gemService) {
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

        this.handleEmployeeEnter = function(key) {
            animationServiceMap[key].generateAnimation();
            debugger;
        };

        this.handleEmployeeLeave = function(key) {
            animationServiceMap[key].resetAnimation();
        };

        this.getNumber = function(num) {
            return new Array(num);
        };
    }]);
})();