(function () {
    'use strict';

    angular.module('app')

    .controller('resumeController', [function () {
        var me = this;
        this.allTextLineOnjects = [];
        this.eachCategoryObject = {};

        this.removeLine = function () {
            this.allTextLineOnjects.pop();
        };

        this.openSection = function(key) {
            this.allTextLineOnjects = this.eachCategoryObject[key];
        };

        this.readFile = function (fileName) {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", fileName, false);
            rawFile.onreadystatechange = function () {
                if(rawFile.readyState === 4) {
                    if(rawFile.status === 200 || rawFile.status == 0) {
                        me.allTextLineOnjects = me.formatRawFile(rawFile);
                    }
                }
            };
            rawFile.send(null);
        };

        this.formatRawFile = function(_rawFile) {
            var curCategory = '';
            var categoryChar = '~';
            var firstClass = 'fade';
            var resumeTextArray = _rawFile.responseText.split('\n');

            var categoryLevel = new CategoryLevel();

            for (var element in resumeTextArray) {
                var curLine = resumeTextArray[element];
                var firstChar = curLine[0];

                switch (firstChar) {

                    case categoryChar:
                        curCategory = curLine;
                        curCategory = curCategory.trim().slice(1);
                        this.eachCategoryObject[curCategory] = [];
                        //categoryLevel.addCategory(curCategory);
                        break;
                    default:
                        if(curCategory) {
                            var newDiv = {
                              line: curLine,
                              className: firstClass
                            };
                            this.eachCategoryObject[curCategory].push(newDiv);
                            //categoryLevel.addDataToLastCategory(curCategory, firstClass, curLine);
                        }
                }
            }
        };

        this.readFile('../../../resumes/dillonResume.txt');
    }]);
})();