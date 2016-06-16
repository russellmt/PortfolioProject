(function () {
    'use strict';

    angular.module('app')

    .controller('resumeController', [function () {
        var me = this;
        this.allTextLineOnjects = [];

        this.removeLine = function () {
            this.allTextLineOnjects.pop();
        };

        this.readFile = function (fileName) {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", fileName, false);
            rawFile.onreadystatechange = function () {
                if(rawFile.readyState === 4) {
                    if(rawFile.status === 200 || rawFile.status == 0) {
                        var resumeTextArray = rawFile.responseText.split('\n');
                        resumeTextArray.reverse();

                        for (var element in resumeTextArray) {
                            var line = resumeTextArray[element];
                            me.allTextLineOnjects.push({
                                line: line
                            });
                        }
                    }
                }
            };
            rawFile.send(null);
        };

        this.readFile('../../../resumes/dillonResume.txt');

        this.decodeLine = function(_curLine) {
            var className = '';
            var category = 'fade';
            var bold = 'rotate';

            for(var i = 0, length = _curLine.length; length > 1 && i < 2; i++) {
                var char = _curLine[i];
                switch (char) {
                    case '~':
                        className += category;
                        break;

                    case ':':
                        className += className ? (' ' + bold): bold;
                        return className;
                }
            }
            return className;
        };

    }]);
})();