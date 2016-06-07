(function () {
    'use strict';

    angular.module('app.dillonPage')

    .controller('resumeController', [function () {
        var allTextInCurFile = '';

        this.readFile = function (file) {
            debugger;
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, false);

            rawFile.onreadystatechange = function () {
                if(rawFile.readyState === 4) {
                    if(rawFile.status === 200 || rawFile.status == 0) {
                        allTextInCurFile = rawFile.responseText;
                    }
                }
            };
            rawFile.send(null);
        };
        
        this.readFile('../../../resumes/dillonResume.txt');

        this.decodeFile = function(word) {
            switch (word) {
                case 'asd':
                    break;

                case 'aaa':
                    break;
            }
        };
    }]);
})();